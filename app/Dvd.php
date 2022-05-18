<?php

namespace App;

class Dvd extends Product
{

    protected $attribute;

    public function __construct($inputs)
    {
        parent::__construct($inputs);
        $this->attribute = $inputs->size . "MB";
    }
}
