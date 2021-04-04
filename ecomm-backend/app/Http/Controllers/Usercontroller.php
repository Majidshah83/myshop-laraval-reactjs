<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\User;
use Illuminate\Support\Facades\Hash;
class Usercontroller extends Controller
{
  //Registration 
   public function register(Request $req){
            // return $req->get('name'); 
            // return $req->get('email');      show response on client side 
            // return $req->get('password');
            // return "wajid";

            // $user=new User;
            // $user->name=$req->get('name');
            // $user->email=$req->get('email');
            // $user->password=Hash::make($req->get('password'));
            // $user->save();
            
           $user=['name' => $req->get('name'),'email' => $req->get('email'),'password' => Hash::make($req->get('password'))];
           User::create($user);
           return response()->json(['success'=>true,'message'=>'success', 'data' => $user]);


}

//login form
public function login(Request $request)   
{
     $email = $request->input('email');
     $password = $request->input('password');

     $user = User::where('email', '=', $email)->first();
     if (!$user) {
        return response()->json(['success'=>false, 'message' => 'Login Fail, please check email id']);
     }
     if (!Hash::check($password, $user->password)) {
        return response()->json(['success'=>false, 'message' => 'Login Fail, pls check password', 'user' => $user]);
     }
        return response()->json(['success'=>true,'message'=>'success', 'user' => $user]);
}

//Get ALL register user
 public function index(){
       $data=User::all();
      return $data;
     
  }
}