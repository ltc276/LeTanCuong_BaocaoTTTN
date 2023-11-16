<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;


class CategoryController extends Controller
{
    public function index(){
        $category = Category::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $category],
            200
        );

    }
    public function show($id)
    {
        $category = Category::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $category],
            200
        );
    }
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        // $category->image = $request->name;
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'),$filename);
            }
        } 
        $category->sort_order = $request->sort_order; //form
        $category->metakey = $request->metakey; //form  
        $category->metadesc = $request->metadesc; //form
        $category->parent_id = $request->parent_id;
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status; //form
        $category->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            201
        );
    }
    public function category_home($limit)
    {
        $categorys = Category::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'categorys' => $categorys
            ],
            200
        );
    }
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'),$filename);
            }
        } 
        $category->sort_order = $request->sort_order; //form
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form
        $category->parent_id = $request->parent_id;
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1;
        $category->status = $request->status; //form
        $category->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            200
        );
    }
    public function category_list( $parent_id = 0, $status = 1)
    {
        $args = [

            ['parent_id', '=', $parent_id],
            ['status', '=', $status]
        ];
        $data = Category::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json($data, 200);
    }
    public function destroy($id)
    {
        $category=Category::find($id);
        if($category==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $category->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            200
        );
    }
}
