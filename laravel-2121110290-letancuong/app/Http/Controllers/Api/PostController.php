<?php


namespace App\Http\Controllers\Api;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $post = Post::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $post],
            200
        );

    }
    public function show($id)
    {
        $post = Post::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $post],
            200
        );
    }
    public function store(Request $request)
    {
        $post = new Post();
        $post->title = $request->title; //form
        $post->detail = $request->detail; //form
        $post->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'),$filename);
            }
        } 
        $post->type = $request->type; //form
        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->topic_id = $request->topic_id;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->title = $request->title; //form
        $post->detail = $request->detail; //formt
        $post->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'),$filename);
            }
        } 
        $post->type = $request->type; //form
        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->parent_id = $request->parent_id;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            200
        );
    }
    public function destroy($id)
    {
        $contact=Post::find($id);
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
