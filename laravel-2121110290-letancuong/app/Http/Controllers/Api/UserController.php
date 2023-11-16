<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $users],
            200
        );

    }
    public function login(Request $request){
        $email = $request->email;
        $password = $request->password;
        $args = [['email','=',$email],['roles','=',$request->roles]];
        $user = User::where($args)->first();

        if($user){
            if($user->password == $password){
                return response()->json(
                    ['success' => true, 'message' => 'login', 'data' => $user],
                    200
                );
            }else{
                return response()->json(
                    ['success' => false, 'message' => 'failed'],
                    200
                );
            }
        }
        return response()->json(
            ['success' => false, 'message' => 'failed'],
            200
        );
    }
    public function show($id)
    {
        $user = User::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $user],
            200
        );
    }
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password;
        $user->address = $request->address;
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password;
        $user->address = $request->address;
        $user->roles = $request->roles;
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            200
        );
    }
    public function user_list( $parent_id = 0, $status = 1)
    {
        $args = [

            ['parent_id', '=', $parent_id],
            ['status', '=', $status]
        ];
        $data = User::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json($data, 200);
    }
    public function destroy($id)
    {
        $user=User::find($id);
        if($user==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $user->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            200
        );
    }
}
