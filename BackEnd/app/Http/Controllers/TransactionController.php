<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;





class TransactionController extends Controller
{
    public function getTransaction(Request $request){

       $transactonslist = transactions::get();

       return response()->json($transactonslist,200);
    }

    public function addTransaction(Request $request){
       DB::beginTransaction();

      try {
          $customerid = $request->input('customer_id');
          $roomid = $request->input('room_id');


          $tlist = new transactions;
          $tlist->customer_id = $customerid;
          $tlist->room_id = $roomid;
          $tlist->save();


          $transactonslist = transactions::get();

          DB::commit();
          return response()->json($transactonslist,200);

      } catch (\Exception $e) {
          DB::rollBack();
          return response()->json(["message" => $e->getMessage()],500);
      }

    }


}
