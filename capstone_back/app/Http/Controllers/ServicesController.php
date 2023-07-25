<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ServicesResources;
use App\Models\Services;


class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $service =Services::all();
        $response=[
            'code'=>200,
            'message'=>'Succesfully retrieval of services!',
            'service'=>ServicesResources::collection($service)
        ];
        return $response;

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input=$request->all();
        $service=services::create($input);
        $response=[
            'code'=>200,
            'message'=>'Service succesfully created!',
            'service'=>new ServicesResources($service)
        ];
        return $response;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $service=services::findOrFail($id);
        $response=[
            'code'=>200,
            'message'=>'Service succesfully created!',
            'service'=>new ServicesResources($service)
        ];
        return $response;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input=$request->all();
        $service=services::findOrFail($id);
        $service->update($input);
        $response=[
            'code'=>200,
            'message'=>'Service succesfully updated!',
            'service'=>new ServicesResources($service)
        ];
        return $response;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $service=services::findOrFail($id);
        $service->delete();
        $response=[
            'code'=>200,
            'message'=>'Service succesfully deleted!',
            'service'=>new ServicesResources($service)
        ];
        return $response;

    }
}
