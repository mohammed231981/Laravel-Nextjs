<?php

namespace App\Http\Controllers;

use App\Models\Notification;


class NotificationsController extends Controller
{

    public function get()
    {

       // $output = new \Symfony\Component\Console\Output\ConsoleOutput();
       // $output->writeln(json_encode($request));
      return Notification::where('notified_at', null)
               ->orderBy('created_at', 'desc')
               ->take(12)
               ->get();
    }

    public function delete()
    {
        return Notification::query()->delete();
    }
}
