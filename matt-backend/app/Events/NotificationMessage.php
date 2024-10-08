<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\Channel;


class NotificationMessage implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    protected $user;
   
    protected $data;
   
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(
       User $user, 
        $data)
    {
       $this->user = $user;
        $this->data = $data;
    }

    public function broadcastWith()
    {
        return [
           'user' => $this->user->name,
            'message' => $this->data,
        ];
    }

    public function broadcastAs()
    {
        return 'notifications';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('atmatt-notification');

        // return new PrivateChannel('atmatt-notification');    

    }
}