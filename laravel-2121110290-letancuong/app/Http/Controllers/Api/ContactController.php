<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;


class ContactController extends Controller
{
    public function index(){
        $contact = Contact::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $contact],
            200
        );

    }
    public function show($id)
    {
        $contact = Contact::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $contact],
            200
        );
    }
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->name = $request->name; //form
        $contact->title = $request->title; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->content = $request->content; //form
        $contact->user_id = $request->user_id;
        $contact->replay_id = $request->replay_id;
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->name = $request->name; //form
        $contact->title = $request->title; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->content = $request->content; //form
        $contact->user_id = $request->user_id;
        $contact->replay_id = $request->replay_id;
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->updated_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            200
        );
    }
    public function contact_list( $user_id = 0, $status = 1)
    {
        $args = [

            ['user_id', '=', $user_id],
            ['status', '=', $status]
        ];
        $data = Contact::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json($data, 200);
    }
    public function destroy($id)
    {
        $contact=Contact::find($id);
        if($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $contact->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            200
        );
    }
}

