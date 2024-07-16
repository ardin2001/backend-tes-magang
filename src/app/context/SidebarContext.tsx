"use client"

import { createContext } from 'react'
import { useState } from 'react';

const SidebarContext = createContext({})
export function SidebarContextProvider({ children }: any) {
    const [open, setOpen] = useState();
    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            {children}
        </SidebarContext.Provider>
    )
}

export {SidebarContext}
export default SidebarContextProvider