"use client"
import { ActionTooltip } from '@/components/action-tooltip';
import { ModalType, useModal } from '@/hooks/use-modal-store';
import { Plus } from 'lucide-react';
import React from 'react'

const PageButton = ({type, label}:{ type:ModalType, label:string}) => {
  const { onOpen } = useModal();
  return (
    <div>
    <ActionTooltip
      side="right"
      align="center"
      label={label}
    >
      <button
        onClick={() => onOpen(type)}
        className="group flex items-center"
      >
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
          <Plus
            className="group-hover:text-white transition text-emerald-500"
            size={25}
          />
        </div>
      </button>
    </ActionTooltip>
  </div>
  )
}

export default PageButton;