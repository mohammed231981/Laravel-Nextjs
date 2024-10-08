<?php

namespace App\Http\Controllers;

use Elastic\Elasticsearch\Client;
use Illuminate\Http\Request;


class ElasticsearchController extends Controller
{

   
    protected $client;
    
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct( Client $client )
    {
        $this->client = $client;
      
    }

    public function search(Request $request)
    {

        
        //  $output = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $output->writeln(json_encode( $request['searchparam']));
        $params = [
            'index' => 'users',
            'body' => [
                'query' => [
                    'multi_match' => [
                        'query' => $request['searchparam'],
                        "type" => "phrase_prefix",
                        "fields" => [ "name", "email" ]
                    ],
                ],
            ],
        ];
        
        $response = $this->client->search($params);
        $response = json_decode($response);
        return response()->json([
            'search_result' => $response
        ]);
        
    //    $output = new \Symfony\Component\Console\Output\ConsoleOutput();
    //    $output->writeln($response);
     
    }

 
}
