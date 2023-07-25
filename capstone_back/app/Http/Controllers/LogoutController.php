<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    public function logout(Request $request){
        $token=$request->user()->token();
        $token->revoke();
        $response=['message'=>'User succesfully logged out!'];
        return $response;
    }
}
