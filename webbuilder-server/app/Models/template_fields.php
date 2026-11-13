<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class template_fields extends Model
{
    protected $fillable = [
        "id",
        "name",
        "type",
        "template_id",
        "created_at",
        "updated_at"
    ];
}
