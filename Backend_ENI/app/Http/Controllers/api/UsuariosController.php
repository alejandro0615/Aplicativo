<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function index()
    {
        $Usuarios = Usuarios::all();
        return response()->json(['data' => $Usuarios]);
    }
    public function store(Request $request)
    {
        $Usuarios = new Usuarios();
        $Usuarios->nombre = $request->name;
        $Usuarios->numero = $request->number;
        $Usuarios->correo = $request->email;
        $Usuarios->save();
        return response()->json(['data' => $Usuarios]);
    }
    public function show(Usuarios $Usuarios)
    {
        return response()->json(['data' => $Usuarios]);
    }
    public function update(Request $request, Usuarios $Usuarios)
    {
        $Usuarios->nombre = $request->name;
        $Usuarios->numero = $request->number;
        $Usuarios->correo = $request->email;
        $Usuarios->save();
        return response()->json(['data' => $Usuarios]);
    }
    public function destroy(Usuarios $Usuarios)
    {
        $Usuarios->delete();
        return response()->json(['data' => $Usuarios]);
    }
}