<?php

namespace App\Http\Controllers;

use App\Models\Verlof\Verlofkaart;
use Illuminate\Http\Request;


class VerlofkaartController extends Controller
{

    public function get(Request $request) {

        $model = new Verlofkaart();
        return $model->getData();
    }

    public function save(Request $request) {
  
     var_dump('asdasdasd');
     
    }
}
