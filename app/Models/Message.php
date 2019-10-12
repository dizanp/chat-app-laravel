<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    
    protected $guarded = [
        'id'
    ];

    public function user()
    {
        return $this->belongsTO(\App\Models\User::class);
    }
}
