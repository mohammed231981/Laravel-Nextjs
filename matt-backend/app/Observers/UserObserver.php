<?php

namespace App\Observers;

use App\Jobs\IndexUsers;
use App\Models\User;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        dispatch(new IndexUsers($user));
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        dispatch(new IndexUsers($user));
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
