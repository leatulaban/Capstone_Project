<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginController extends Controller
{
    //
    public function Login(request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'required|string|email',
            'password'=>'required|string'
        ]);

        if($validator->fails()){
            $error = $validator->errors()->all();
            return response(['error'=>$error[0]],422);
        }

        $user=User::where('email',$request->email)->first();
        
        if($user){
            $check_password = Hash::check($request->password, $user->password);
        if ($check_password){
                $token =$user->createToken('LaravelTokenPassword')->accessToken;
                $response = ['token'=>$token,'message'=>'Successfully Logged in!', 'user' => $user];
                return $response;
        } else{
                return response(['error'=>'Password is invalid!'],422);
        }
        } else{
                return response(['error'=>'Email does not exist!'],422);
        }
    }
}