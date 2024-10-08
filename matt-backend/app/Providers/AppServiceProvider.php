<?php

namespace App\Providers;

use App\Models\User;
use App\Observers\UserObserver;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Elastic\Elasticsearch\Client;
use Elastic\Elasticsearch\ClientBuilder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }

        $this->app->singleton(Client::class, function () {
            return ClientBuilder::create()
                ->setHosts(['https://127.0.0.1:9200'])
                ->setSSLVerification(false)
                ->setBasicAuthentication('elastic', 'gDY_XXrkF7jKKSvBZP=Z')
                ->build();
        });

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        User::observe(UserObserver::class);
        JsonResource::withoutWrapping(); // Remove this if you want to wrap data within a 'data' key
    }
}