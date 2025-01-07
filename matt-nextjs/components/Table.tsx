"use client";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';

const Table = (props: {
    tableData: Object[] | undefined
    columns: Object[] | undefined,
    delete?: (id: string) => void,
    edit?: (data: Object) => void
}) => {

    const columnsTable = (props: any) => {
        return props.columns ? props.columns.map((column: any) => (
            <Column key={column.name} field={column.name} header={column.header} sortable={column.sortable === false ? false : true} style={column.style}></Column>
        )) : ''
    };

    const tooltipData = (data: any) => {
        if(data){
            return (
                <div className="flex flex-column  ">
                    <Button className='w-max mx-auto' label='Verwijderen' onClick={() =>  props.delete ? props.delete(data.hid) : false}/>            
                </div>
            )
        }
    }

    const tableButtons = (rowData: any) => {
        return (
            <>
                <div className='flex flex-row'>
                    <div className='pr-2'>
                    <EditNoteIcon className='font-medium' onClick={() => props.edit ? props.edit(rowData) : false}/>
                    </div>
                    <div className='px-2'>
                    <DeleteOutlineIcon className={'font-medium tooltip-button-' + rowData.hid} />
                    </div>
                </div>           
                <Tooltip target={".tooltip-button-" + rowData.hid} autoHide={false} position='bottom' >
                    {tooltipData(rowData)}
                </Tooltip>
            </>
        )
    }
    return (
        <DataTable value={props.tableData} tableStyle={{ minWidth: '67rem' }} size='small' selectionMode="single" scrollable={true} >
            {columnsTable(props)}
            <Column className="text-lg" field="id" header="Actie" body={tableButtons}/>
        </DataTable>

    )
}

export default Table