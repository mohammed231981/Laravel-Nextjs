"use client";

import qs from "query-string";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


import { useParams, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";

import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import React, { useRef, useState } from "react";
import axios from "axios";


export const VerlofModal = () => {
  const { isOpen, onClose, data, modaltype } = useModal();
  const router = useRouter();
  const params = useParams();
  const isModalOpen = isOpen && modaltype === "verlofkaart";
  const toast = useRef(null);
  const [beginDatum, setBegindatum] = useState(null);
  const [eindDatum, setEinddatum] = useState(null);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset, 
    setValue
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_FRONTEND_API_URL + `/api/verlof`,
        data
      );

      reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }


  };
  const getFormErrorMessage = (name: string) => {
    return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
  };
  const handleClose = () => {
    reset()
    onClose();

  }

  const begindatum =  data && data.begindatum ? data?.begindatum.split('-') : false;
  const bd=  begindatum ? new Date(begindatum[2], begindatum[1]-1, begindatum[0]) :beginDatum;

  const einddatum =  data && data.einddatum ? data?.einddatum.split('-') : false;
  const ed= einddatum ? new Date(einddatum[2], einddatum[1]-1, einddatum[0]) : eindDatum

  return (
    <Dialog className="flex justify-content-center w-full xl:w-[600px] pl-[4px] pr-[4px]" header="Verlof opnemen" maximizable visible={isModalOpen} onHide={handleClose}>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      
          <div className="flex flex-col xl:w-60">
            <Controller
              name="begindatum"
              control={control}
              rules={{ required: 'Begindatum is verplicht.' }}
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor={field.name}>Begindatum</label>
                  <Calendar id={field.name}  value={bd}  className={'h-10'} onChange={(e) => setValue('begindatum',e.target.value)} dateFormat="dd-mm-yy" />
                  {getFormErrorMessage(field.name)}
                </>
              )}
            />
          </div>
          <div className="flex flex-col xl:w-60">
            <Controller
              name="einddatum"
              control={control}
              rules={{ required: 'Einddatum is verplicht.' }}
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor={field.name}>Einddatum</label>
                  <Calendar id={field.name}  value={ed  } className={'h-10'}  onChange={(e) => setValue('einddatum',e.target.value)} dateFormat="dd-mm-yy" />
                  {getFormErrorMessage(field.name)}
                </>
              )}
            />
          </div>
          
          <Controller
            name="omschrijving"
            control={control}
            rules={{ required: 'Omschrijving is verplicht' }}
            render={({ fieldState, field: { name, value } }) => (
              <>
                <label htmlFor={name}>Omschrijving</label>
                <span className="p-float-label">
                  <InputText id={name} defaultValue={data.omschrijving} className={'w-full h-10'} />

                </span>
                {getFormErrorMessage(name)}
              </>
            )}
          />
          <div className="flex justify-end pt-10">
            <Button type="submit" label="Indienen" />
          </div>
        </form>
      </div>
    </Dialog>
  )
}