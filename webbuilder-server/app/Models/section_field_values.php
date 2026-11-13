<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class section_field_values extends Model
{
    protected $fillable = [
        "page_section_id",
        "template_field_id",
        "value",
        "created_at",
        "updated_at"
    ];
}
