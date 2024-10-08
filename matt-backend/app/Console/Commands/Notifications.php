<?php

namespace App\Console\Commands;

use App\Events\NotificationMessage;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Notifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:notifications';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notfications';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Log::info("Cron is working fine!");

        $notification = Notification::create(
            [
                'name' => 'ikke Mohammed',
                'email' => 'mohammed@hotmail.com',
                'title' => 'test cron',
                'message' => 'test crom',
                'user_id' => 1
            ]
        );

        $user = User::findOrFail(1);

        event(new NotificationMessage(
            $user,
            $notification
        ));
    }
}
