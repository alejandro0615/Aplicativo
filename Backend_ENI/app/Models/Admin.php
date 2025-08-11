<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public function estudiante()
    {
        return $this->belongsTo(Trainer::class);
    }

    public function curso()
    {
        return $this->belongsTo(Courses::class);
    }
}
