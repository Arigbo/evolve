"use client"
import { createContext } from 'react';

export const Context = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
});