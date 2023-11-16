<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $products = Product::where('status', '=', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    public function product_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    public function product_detail($slug)
    {
        $product = Product::where([['slug','=',$slug],['status','=',1]])->first();
        if($product==null)
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu không thành công',
                    'product' => null
                ],
                404
            );
        }
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product' => $product
            ],
            200
        );
    }
    public function product_detail_plus($slug,$category_id)
    {
        $product = Product::where([['slug','=',$slug],['status','=',1],['category_id','=',$category_id]])->first();
        $products = Product::where([['category_id','=',$category_id],['status','=',1]])->whereNotIn('id',[$product->id])->get();
        if($product==null)
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu không thành công',
                    'product' => null
                ],
                404
            );
        }
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product' => $product,
                'products' => $products
            ],
            200
        );
    }
    public function product_category_id($category_id)
    {
        $product = Product::where([['category_id','=',$category_id],['status','=',1]])->get();
        if($product==null)
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu không thành công',
                    'product' => null
                ],
                404
            );
        }
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product' => $product
            ],
            200
        );
    }

    public function index(){
        $products = Product::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $products],
            200
        );

    }
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $product],
            200
        );
    }
    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        // $product->image = $request->name;
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'),$filename);
            }
        } 
        $product->category_id = $request->category_id; //form
        $product->brand_id = $request->brand_id; //form
        $product->metakey = $request->metakey; //form
        $product->detail = $request->detail; //form
        $product->description = $request->description; //form
        $product->metadesc = $request->metadesc; //form
        $product->price = $request->price; //form
        $product->price_sale = $request->price_sale; //form
        $product->qty = $request->qty;
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
       $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'),$filename);
            }
        } 
        $product->brand_id = $request->brand_id; //form
        $product->qty = $request->qty; //form
        $product->price = $request->price; //form
        $product->detail = $request->detail; //form
        $product->price_sale = $request->price_sale; //form
        $product->metakey = $request->metakey; //form
        $product->description = $request->description; //form
        $product->metadesc = $request->metadesc; //form
        $product->category_id = $request->category_id;
        $product->updated_at = date('Y-m-d H:i:s');
        $product->updated_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
    public function product_category($category_id, $limit, $page = 1)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    public function destroy($id)
    {
        $product=Product::find($id);
        if($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $product->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
}

