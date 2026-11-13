<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class Auth extends Controller
{

    public function Login(Request $request)
    {

        $Validasi = Validator::make($request->all(), [
            'email' => 'required|email|max:225',
            'password' => 'required|string|max:225',
        ]);


        if ($Validasi->fails()) {
            return response()->json([
                'data' => [
                    'success' => false,
                    'message' => "Validasi Gagal",
                    'errors' => $Validasi->errors(),
                ],
            ], 422);
        };

        $users = User::where('email', $request->email)->first();

        if (!$users || !Hash::check($request->password, $users->password)) {
            return response()->json([
                'data' => [
                    'success' => false,
                    'message' => "Email atau Password Salah",
                ],
            ], 401);
        };

        $token = $users->createToken('tokenSaya')->plainTextToken;

        return response()->json([
            'data' => [
                'token' => $token,
                'success' => true,
                'message' => "Berhasil Login",
                'user' => [
                    'id' => $users->id,
                    'name' => $users->name,
                    'email' => $users->email,

                ],
            ],
        ], 200)->cookie('tokenSaya', $token);
    }



    



    public function Register(Request $request)
    {
        $Validasi = $request->validate([
            'name' => 'required|string|max:225',
            'email' => 'required|email|unique:users,email|max:225',
            'password' => 'required|string|max:225',
        ]);

        $users = User::create([
            'name' => $Validasi['name'],
            'email' => $Validasi['email'],
            'password' => Hash::make($Validasi['password']),
        ]);

        $token = $users->createToken('tokenSaya')->plainTextToken;

        return response()->json([
            'data' => [
                'token' => $token,
                'success' => true,
                'message' => "Akun berhasil ditambahkan",
                'user' => [
                    'id' => $users->id,
                    'name' => $users->name,
                    'email' => $users->email,

                ],
            ],
        ], 200)->cookie('tokenSaya', $token);
    }
    
}