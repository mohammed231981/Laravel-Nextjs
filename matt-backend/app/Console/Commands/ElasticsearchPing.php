<?php

namespace App\Console\Commands;
use Elastic\Elasticsearch\Client;

use Illuminate\Console\Command;

class ElasticsearchPing extends Command
{

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:elasticsearch-ping';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * @param Client $client
     */
    public function handle(Client $client)
    {
        $params = [
            'index' => 'users',
            'body' => [
                'query' => [
                    'prefix' => [
                        'name' => 'moh',
                    ],
                ],
            ],
        ];
        
        $response = $client->search($params);
        if ($client->ping()) {
            $this->info($response);
            return;
        }

        $this->error('Could not connect to Elasticsearch.');
    }
}
