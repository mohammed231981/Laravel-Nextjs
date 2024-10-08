"use client"
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'
import PageButton from '@/components/buttons/PageButton'
import axios from 'axios'
import DataScrollerTable from '@/components/DataScrollerTable';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useModal } from '@/hooks/use-modal-store'

const verlofkaart = () => {
    const { onOpen } = useModal();
    const [verlofkaartRes, setVerlofkaartRes] = useState<any>(null)
    useEffect(() => {
        const apiCall = async () => {
            await verlofkaartApi()
        }
        apiCall()

    }, [setVerlofkaartRes])

    const verlofkaartApi = async () => {
        const response = await axios.get(
            process.env.NEXT_PUBLIC_FRONTEND_API_URL + `/api/verlof`,
        );
        setVerlofkaartRes(response);
    }

    let data = [];
    if (verlofkaartRes?.data) {
        data = verlofkaartRes?.data.data;
    }

    const props = {
        tableData: data,
        columns: [
            { name: 'begindatum', header: 'Datum vanaf', style: '' },
            { name: 'einddatum', header: 'Datum t/m', style: '' },
            { name: 'omschrijving', header: 'Omschrijving', style: '' },
            { name: 'urenplus', header: '+Uren', style: '' },
            { name: 'urenmin', header: '-Uren', style: '' },
            //  {name: 'status', header : 'Status', style :''},
            { name: 'bijzonder', header: 'Bijz.', style: '', sortable: false }
        ]
    }

    interface verlofkaartData {
        omschrijving: string;
        urenplus: string;
        urenmin: string;
        begindatum: string;
        einddatum: string;
    }

    const verlofkaart: verlofkaartData[] = props.tableData || [];

    const itemTemplate = (verlofkaart: verlofkaartData) => {


        return (
            <div className="card">
                <div className="flex  justify-between ">
                    <div className="flex flex-row text-xl font-semibold">{verlofkaart.omschrijving ?? '-'}</div>
                    <div className="flex flex-row">
                        <span className="text-700"><EditNoteIcon className='font-medium'  onClick={() => editModal(verlofkaart)} /></span>
                    </div>
                </div>
                <div className="flex justify-end pb-2">
                    <div className="flex ">
                        <span className="text-700"><DeleteOutlineIcon className='font-medium' /></span>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className="flex flex-row  ">
                        <span className="text-700">Begindatum: {verlofkaart.begindatum ?? 0}</span>
                    </div>
                </div>
                <div className='flex justify-between'>

                    <div className="flex flex-row">
                        <span className="text-700">Einddatum: {verlofkaart.einddatum ?? 0}</span>
                    </div>


                </div>

                <div className='flex justify-between  pb-1 '>
                    <div className="flex flex-row   ">
                        <span className="text-700">Urenplus: {verlofkaart.urenplus ?? 0}</span>
                    </div>
                    <div className="flex flex-row ">
                        <span className="text-700">Urenmin: {verlofkaart.urenmin ?? 0}</span>
                    </div>

                </div>

            </div>
        );
    };

    const editModal = (data: Object | undefined)=>{
        onOpen('verlofkaart', data)
    }

    return (
        <>
            <div className='hidden lg:flex stick  justify-center flex-col  xl:pl-80 pr-5 pl-5' >
                <div className='flex justify-between w-full pb-10'>
                    <h1 className="pl-4 font-bold text-2xl  text-zinc-700">Verlofkaart</h1>
                    <PageButton type="verlofkaart" label='Verlof opnemen' />
                </div>
                <Table columns={props.columns} tableData={props.tableData} delete={() => { console.log('delete') }} edit={(data) => editModal(data) } />
            </div>
            <div className='flex lg:hidden stick  justify-center flex-col p-2' >
                <div className='flex justify-between w-full pb-10'>
                    <h1 className="pl-4 font-bold text-2xl  text-zinc-700">Verlofkaart</h1>
                    <PageButton  type="verlofkaart" label='Verlof opnemen' />
                </div>
                <DataScrollerTable template={itemTemplate} data={verlofkaart}  />
            </div>
        </>
    )
}

export default verlofkaart