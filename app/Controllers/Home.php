<?php

namespace App\Controllers;

class Home extends BaseController
{

    public function index(): string
    {
        $data = [
            'title' => 'Inicio',
            'dataPage' => "ham-modalalert-themeswitch",
        ];
        return view('home/index', $data);
    }

    public function test(): string
    {
        return "okay";
    }

    public function loginHome(): string
    {
        $data = [
            'title' => 'Login',
            'dataPage' => "ham-modalalert-themeswitch",
        ];
        return view('auth/login_view', $data);
    }


}
