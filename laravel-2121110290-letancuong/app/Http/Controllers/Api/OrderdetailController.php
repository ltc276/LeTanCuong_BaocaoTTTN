<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orderdetail;

class OrderdetailController extends Controller
{
    public function index(){
        $orderdetails = Orderdetail::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orderdetails],
            200
        );

    }
    public function show($id)
    {
        $orderdetail = Orderdetail::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orderdetail],
            200
        );
    }
    public function store(Request $request)
    {
        $orderdetail = new Orderdetail();
        $orderdetail->order_id = $request->order_id; //form
        $orderdetail->product_id = $request->product_id; //form
        $orderdetail->price = $request->price; //form
        $orderdetail->qty = $request->qty; //form
        $orderdetail->amount = $request->amount;
        $orderdetail->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $orderdetail = Orderdetail::find($id);
        $orderdetail->order_id = $request->order_id; //form
        $orderdetail->product_id = $request->product_id; //form
        $orderdetail->price = $request->price; //form
        $orderdetail->qty = $request->qty; //form
        $orderdetail->amount = $request->amount;
        $orderdetail->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],
            200
        );
    }
}
