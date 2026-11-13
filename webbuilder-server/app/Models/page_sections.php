<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class page_sections extends Model
{
    protected $fillable = [
        "id",
        "name",
        "page_id",
        "template_id",
        "position",
        "created_at",
        "updated_at"
    ];
}
