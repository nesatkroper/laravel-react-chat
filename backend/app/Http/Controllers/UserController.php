<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function editBio(Request $request)
    {
        try {
            $id = $request->id;
            $edit = User::findOrFail($id);
            $edit->update([
                'bio' => $request->bio
            ]);
            return response()->json([
                'status' => true,
                'data' => $edit,
                'message' => "Successfully"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function editName(Request $request)
    {
        try {
            $id = $request->id;
            $edit = User::findOrFail($id);
            $edit->update([
                'name' => $request->name
            ]);
            return response()->json([
                'status' => true,
                'data' => $edit,
                'message' => "Successfully"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function editUsername(Request $request)
    {
        try {
            $id = $request->id;
            $edit = User::findOrFail($id);
            $edit->update([
                'username' => $request->username
            ]);
            return response()->json([
                'status' => true,
                'data' => $edit,
                'message' => "Successfully"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
