<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    public function Aliases()
    {
        return $this->hasMany(Alias::class);
    }

    public function Image()
    {
        return $this->belongsTo(Image::class);
    }

    public function Status()
    {
        return $this->belongsTo(Status::class);
    }

    public function Missions()
    {
        return $this->belongsToMany(Mission::class);
    }
}
