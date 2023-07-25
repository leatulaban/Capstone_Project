<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class SignupController extends Controller
{
    //
    public function register(request $request){
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string',
            'email'=>'required|string|email',
            'password'=>'required|string'
        ]);

        if($validator->fails()){
            return response(['error'=>$validator->errors()->all()],422);
        }

        $password_hash=Hash::make($request->password);
        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$password_hash
        ]);

        $token=$user->createToken('LaravelTokenPassword')->accessToken;
        $response=['token'=>$token,'message'=>'User Successfully created'];
        return $response;

}
}