<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Templates;

class Template extends Controller
{
    public function templates() {

        $template = Templates::get()->all();

        return response()->json([
            "success" => true,
            "message" => "Daftar Template",
            "data" => [
                "templates" => $template 
            ],
        ]);
    }

    public function show (string $slug) {

        $template = Templates::where('slug', $slug)->firstOrFail();

        return response()->json([
            "success" => true,
            "message" => "Detail Template",
            "data" => [
                "template" => $template 
            ],
        ]);
    }



}
