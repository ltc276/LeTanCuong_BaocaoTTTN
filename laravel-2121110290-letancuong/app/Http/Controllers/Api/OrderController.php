<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index(){
        $order = Order::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $order],
            200
        );

    }
    public function show($id)
    {
        $order = Order::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $order],
            200
        );
    }
    public function store(Request $request)
    {
        $order = new Order();
        $order->name = $request->name; //form
        $order->address = $request->address; //form
        $order->note = $request->note; //form
        $order->email = $request->email; //form
        $order->phone = $request->phone; //form
        $order->user_id = $request->user_id;
        $order->created_at = date('Y-m-d H:i:s');
        $order->created_by = 1;
        $order->status = $request->status; //formuser
        $order->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        $order->name = $request->name; //form
        $order->address = $request->address; //form
        $order->note = $request->note; //form
        $order->email = $request->email; //form
        $order->phone = $request->phone; //form
        $order->user_id = $request->user_id;
        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1;
        $order->status = $request->status; //form
        $order->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
    }
    public function destroy($id)
    {
        $order=Order::find($id);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $order->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
    }
}
