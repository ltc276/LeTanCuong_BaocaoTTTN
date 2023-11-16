<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    public function index(){
        $menus = Menu::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menus],
            200
        );

    }
    public function menu_list($type, $table_id = 0, $status = 1)
    {
        $args = [
            ['type', '=', $type],
            ['table_id', '=', $table_id],
            ['status', '=', $status]
        ];
        $data = Menu::where($args)->orderBy('created_by', 'ASC')->get();
        return response()->json($data, 200);
    }
    public function show($id)
    {
        $menu = Menu::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menu],
            200
        );
    }
    public function store(Request $request)
    {
        $menu = new Menu();
        $menu->name = $request->name; //form
        $menu->table_id = $request->table_id; //form
        $menu->link = $request->link; //form
        $menu->type = $request->type; //form
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;
        $menu->status = $request->status; //form
        $menu->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            200
        );
    }
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->name = $request->name; //form
        $menu->table_id = $request->table_id; //form
        $menu->link = $request->link; //form
        $menu->type = $request->type; //form
        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->updated_by = 1;
        $menu->status = $request->status; //form
        $menu->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            200
        );
    }
    public function destroy($id)
    {
        $menu=Menu::find($id);
        if($menu==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $menu->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            200
        );
    }
}
