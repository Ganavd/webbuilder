<?php

namespace App\Http\Controllers;

use App\Models\page_sections;
use App\Models\pages;
use App\Models\templates;
use Illuminate\Http\Request;

class Section extends Controller
{
    public function index(Request $request, string $slug)
    {
        $page = pages::where('user_id', $request->user()->id)
            ->where('slug', $slug)
            ->firstOrFail();

        $sections = page_sections::where('page_id', $page->id)
            ->orderBy('position')
            ->get();

        return response()->json([
            "success" => true,
            "message" => "Daftar Section",
            "data" => [
                "sections" => $sections,
            ],
        ]);
    }

    public function store(Request $request, string $slug)
    {
        $page = pages::where('user_id', $request->user()->id)
            ->where('slug', $slug)
            ->firstOrFail();

        $validated = $request->validate([
            'template_id' => 'required|integer|exists:templates,id',
            'name' => 'nullable|string|max:255',
            'position' => 'sometimes|required|integer|min:1',
        ]);

        $template = templates::findOrFail($validated['template_id']);

        $position = $validated['position']
            ?? (page_sections::where('page_id', $page->id)->max('position') ?? 0) + 1;
        
        $section = page_sections::create([
            'name' => $validated['name'] ?? $template->name,
            'page_id' => $page->id,
            'template_id' => $template->id,
            'position' => $position,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Section berhasil ditambahkan",
            "data" => [
                "section" => $section,
            ],
        ], 201);
    }
}
