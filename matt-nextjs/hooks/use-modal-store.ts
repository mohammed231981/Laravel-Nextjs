
import { create } from "zustand";

export type ModalType = "general" | "verlofkaart";

interface ModalData {
  apiUrl?: string;
  data?: {};
}

interface ModalStore {
  modaltype: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: Object) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  modaltype: null,
  data: {},
  isOpen: false,
  onOpen: (modaltype, data = {}) => set({ isOpen: true, modaltype, data }),
  onClose: () => set({ modaltype: null, isOpen: false, data :{} })
}));
