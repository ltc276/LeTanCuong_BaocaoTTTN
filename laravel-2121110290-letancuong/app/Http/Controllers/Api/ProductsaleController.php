<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Productsale;

class ProductsaleController extends Controller
{
    public function index(){
        $productsale = Productsale::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productsale],
            200
        );

    }
    public function show($id)
    {
        $productsale = Productsale::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productsale],
            200
        );
    }
    public function store(Request $request)
    {
        $productsale = new Productsale();
        $productsale->product_id = $request->product_id; //form
        $productsale->price_sale = $request->price_sale; //form
        $productsale->qty = $request->qty; //form
        $productsale->data_begin = Carbon::parse($request->data_begin)->format('Y-m-d'); // Chuyển đổi thành đối tượng ngày
        $productsale->data_end = Carbon::parse($request->data_end)->format('Y-m-d'); // Chuyển đổi thành đối tượng ngày
        $productsale->created_at = date('Y-m-d H:i:s');
        $productsale->created_by = 1;
        $productsale->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $productsale = Productsale::find($id);
        $productsale->product_id = $request->product_id; //form
        $productsale->price_sale = $request->price_sale; //form
        $productsale->qty = $request->qty; //form
        $productsale->data_begin = Carbon::parse($request->data_begin)->format('Y-m-d'); // Chuyển đổi thành đối tượng ngày
        $productsale->data_end = Carbon::parse($request->data_end)->format('Y-m-d'); // Chuyển đổi thành đối tượng ngày
        $productsale->updated_at = date('Y-m-d H:i:s');
        $productsale->updated_by = 1;
        $productsale->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            200
        );
    }
    public function productsale_product_id($product_id)
    {
        $productsale = Productsale::where([['product_id','=',$product_id]])->get();
        if($productsale==null)
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu không thành công',
                    'productsale' => null
                ],
                404
            );
        }
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'productsale' => $productsale
            ],
            200
        );
    }
    public function destroy($id)
    {
        $productsale=Productsale::find($id);
        if($productsale==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $productsale->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            200
        );
    }
}
