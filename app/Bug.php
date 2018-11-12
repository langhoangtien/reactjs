<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bug extends Model
{
    protected $fillable = [
    	'name', 
    	'description'
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}