<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\pages;
use Illuminate\Http\Request;

class Page extends Controller
{
    /**
     * GET /api/pages : daftar page milik user yang login
     */
    public function pages(Request $request)
    {
        $Page = pages::where('user_id', $request->user()->id)->get();

        return response()->json([
            "success" => true,
            "message" => 'Daftar Pages',
            "data" => ["pages" => $Page], 
        ], 200);
    }

    /**
     * POST /api/pages : buat page baru
     */
    public function store(Request $request)
    {
        $ValidasiAsli = $request->validate([
            "title" => "required|string|max:255",
            "summary" => "nullable|string|max:255",
        ]);

        $data = pages::create([
            "title" => $ValidasiAsli["title"],
            "summary" => $ValidasiAsli["summary"] ?? "", // ?? "" kolom summary tidak boleh null
            "slug" => Str::slug($ValidasiAsli["title"]), // otomatis slug dibuat dari title
            "user_id" => $request->user()->id,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Data Berhasil ditambahkan",
            "data" => $data, 
        ], 201);
    }

    /**
     * GET /api/pages/{slug} : detail satu page
     */
    public function show(Request $request, string $slug)
    {
        $data = pages::where('user_id', $request->user()->id)
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json([
            "success" => true,
            "message" => "Detail Page",
            "data" => $data,
        ], 200);
    }

    /**
     * PUT /api/pages/{slug} : ubah page
     */
    public function update(Request $request, string $slug)
    {
        $Validasi = $request->validate([
            "title" => "sometimes|required|string|max:255",
            "summary" => "sometimes|nullable|string|max:255",
            "slug" => "sometimes|required|string|max:255",
        ]);

        if (array_key_exists("summary", $Validasi)) {
            $Validasi["summary"] = $Validasi["summary"] ?? "";
        }
        if (array_key_exists("slug", $Validasi)) {
            $Validasi["slug"] = Str::slug($Validasi["slug"]);
        }

        $page = pages::where('user_id', $request->user()->id)
            ->where('slug', $slug)
            ->firstOrFail();
        $page->update($Validasi);

        return response()->json([
            "success" => true,
            "message" => "Data berhasil diperbarui",
            "data" => $page,
        ], 200);
    }

    /**
     * DELETE /api/pages/{slug} : hapus page
     */
    public function destroy(Request $request, string $slug)
    {
        $page = pages::where('user_id', $request->user()->id)
            ->where('slug', $slug)
            ->firstOrFail();
        $page->delete();

        return response()->json([
            "success" => true,
            "data" => $page,
            "message" => "Data berhasil dihapus",
        ], 200);
    }
}
