<?php

namespace App\Http\Controllers\Web\App;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\App;
use App\Http\Resources\Collection\AppCollection;
use App\Http\Resources\App as AppResource;

class AppController extends Controller
{
    //
    public function index(){
        return view('app');
    }

    public function create(Request $request){
        $store = App::create($request->all());
        return $store ? response()->json(['Success'=>true, 'message'=>'Data Saved'], 200) : 
        response()->json(['Success'=>false, 'message'=>'Save failed!'], 500);
    }

    public function update(Request $request){
        $update = App::where('id', $request->id)->update($request->all());
        return $update ? response()->json(['Success'=>true, 'message'=>'Data Updated'], 200) : 
        response()->json(['Success'=>false, 'message'=>'Update failed!'], 500);
    }

    public function destroy(Request $request){
        $destroy = App::where('id', $request->id)->delete();
        return $destroy ? response()->json(['Success'=>true, 'message'=>'Data Deleted'], 200) : 
        response()->json(['Success'=>false, 'message'=>'Delete failed!'], 500);
    }

    public function get(){
        return new AppCollection(App::all());
    }

    public function getSingle(Request $request){
        return new AppResource(App::find($request->id));
    }
}
