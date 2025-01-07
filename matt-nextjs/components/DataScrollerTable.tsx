"use client";

import { DataScroller } from 'primereact/datascroller';




const DataScrollerTable = (props: {
  template: any,
  data: any,
  delete?: (id: string) => void,
  edit?: (data: Object) => void
}) => {



  return (
    <div className="">
      <DataScroller
        value={props.data}
        itemTemplate={props.template}
        lazy
      />
    </div>
  )
}

export default DataScrollerTable

