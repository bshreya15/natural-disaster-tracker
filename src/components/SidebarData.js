import React from 'react'
import { Icon } from "@iconify/react";
import home from "@iconify/icons-mdi/home";
import fire from "@iconify/icons-mdi/fire-alert";
import flash from "@iconify/icons-mdi/flash-alert";
import volcano from "@iconify/icons-mdi/image-filter-hdr";
import snowflake from "@iconify/icons-mdi/snowflake-variant";


export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<Icon icon={home}/>,
        cName:'nav-text'
    },
    {
        title:'Wildfires',
        path:'/wildfires',
        icon:<Icon icon={fire}/>,
        cName:'nav-text'
    },
    {
        title:'Storms',
        path:'/storms',
        icon:<Icon icon={flash}/>,
        cName:'nav-text'
    },
    {
        title:'Volcanoes',
        path:'/volcanoes',
        icon:<Icon icon={volcano}/>,
        cName:'nav-text'
    },
    {
        title:'Sea and Lake Ice',
        path:'/seaandlake',
        icon:<Icon icon={snowflake}/>,
        cName:'nav-text'
    },
]