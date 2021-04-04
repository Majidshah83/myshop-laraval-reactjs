<?php

namespace App\Http\Controllers;
use App\models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addprodcut(Request $req){
        // $req->file('file')->store('products'); // store file path
        // return "wajid";
        $product=new Product;
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->description=$req->input('description');
        $product->file_path=$req->file('file')->store('product');
        $product->save();
        if(!$product) 
        {
            return response()->json(['success'=>false, 'message' => 'Add Podcuct Fail please try again']);
        }
        return response()->json(['success'=>true, 'message' => ' Podcuct Add successfully']);
    }
    function productList(){
            $product=Product::all();
            return $product;
    }
    function delete($id){
        $result=Product::where('id',$id)->delete();
        if(!$result){
            return response()->json(['success'=>false,'message'=>'delete operation failed ']);
        }
        return response()->json(['success'=>true,'message'=>'delete product successfully']);
    }
    function updatebyid(Request $request,$id){
        $product=Product::find($id);
        $product->price=$request->input('price');
         $product->name=$request->input('name');
        $product->description=$request->input('description');
         $product->file_path=$request->file('file')->store('product');
         $result=$product->save();
         if($result){
        return response()->json(['success'=>true,'message'=>'update product successfully']);
         }
         
    }
    public function getbyproduct($id){
    $product=Product::where('id',$id)->first();
    return response()->json(['message' => "Get products","data" => $product]);
}
public function search($key){
        return Product::where('name','like',"%{$key}%")->get();
}
}