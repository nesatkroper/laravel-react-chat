<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getContact($id)
    {
        try {
            $contact = Contact::findOrFail($id)->all();

            return response()->json([
                'data' => $contact,
                'status' => true,
                'message' => 'Contact get successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function getOnlyContact($id)
    {
        try {
            $contact = Contact::findOrFail($id);
            return response()->json([
                'data' => $contact,
                'status' => true,
                'message' => 'Contact get successful'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function createContact(Request $request)
    {
        try {
            $phone = User::where('phone', '=', $request->phone)->first();
            if ($phone) {
                $contact = Contact::create([
                    'creator' => $request->creator,
                    'member' => $phone->usr_id,
                    'phone' => $phone->phone,
                    'name' => $request->name,
                    'status' => 'active',
                ]);
                return response()->json([
                    'data' => $contact,
                    'status' => true,
                    'message' => 'Contact get successful'
                ]);
            } else {
                return response($phone);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}