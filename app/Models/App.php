<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class App extends Model
{
    //
    protected $table = 'app_data';

    protected $fillable = [
        'text'
    ];
}
