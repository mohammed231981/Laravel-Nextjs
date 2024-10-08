<?php

namespace App\Models\Verlof;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Verlofkaart extends Model
{
    use HasFactory;

    protected $connection = "sqlsrv";
   
    protected $fillable = [
        'StartDate',
        'EndDate',
        'freetextfield_01',
        'type',
        'status',
        'id',
       
    ];


    /**
     * getData function
     *
     * @return void
     */
    public function getData(){
        $resid = 10001;
        $jaar = 2023;

        $sql         =     " select  spc.hid ".
        " ,       convert(varchar(16),spc.StartDate,105)             begindatum ".
        " ,       isnull(convert(varchar(5),spc.StartDate,108),'     ')               starttijd  ".
        " ,       isnull(convert(varchar(16),spc.EndDate,105),'         ')               einddatum  ".
        " ,       isnull(convert(varchar(5),spc.endDate,108),'     ')                eindtijd  ".
        " ,       spc.freetextfield_01  + case when isnull(spc.freetextfield_01,'') = '' then '' else '-' end + spc.description          omschrijving  ".
        " ,       case spc.type when 4001 then  ".
                                  " case spc.status  ".
                                     " when 2 then null ".
                                     " else spc.hours end end   urenmin  ".
        " ,       case spc.type when 4002 then   ".
                                  " case spc.status  ".
                                     " when 2 then null ".
                                     " else spc.hours end end   urenplus  ".
        " ,       case spc.type when 4003 then spc.hours when 4001 then ".
                      " case spc.status ".
                      "   when 2 then spc.hours ".
                      "   else null end end    uren  ".
        " ,       case spc.Status  ".
                 " when 0 then 'In behandeling'  ".
                 " when 1 then 'Goedgekeurd'  ".
                 " when 2 then 'Afgekeurd'  ".
                 " else 'Onbekend'  ".
             " end                       status  ".
        " ,      case spc.type when 4003 then 1 else 0 end     bijzonder ".
        " ,      cast(spc.id as varchar(50))   sleutel ".
        " ,      case spc.status when 0 then 'Sinds: ' + convert(varchar(10),spc.syscreated,105) else spc.RequestComments end redenafk ".
        " from    absences     spc with(nolock) ".
        " where   spc.type in (4001, 4002, 4003)  ".
        " and     spc.EmpID = ".$resid.
        " and     year(spc.StartDate) = ". $jaar .
        //" and     spc.StartDate >= cast( cast( year(getdate()) as varchar) + '/01/01' as datetime)   ";
        " and     spc.StartDate >= cast( '" . $jaar . "/01/01' as datetime)   ";
    
        $data =  DB::connection('sqlsrv')->select($sql, [1]);
        return $data;
    }
}
