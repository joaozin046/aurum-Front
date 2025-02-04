import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title : 'Página Inicial',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
        id: 'home'
    },
    {
        title : 'Notícias',
        path: '/news',
        icon: <FaIcons.FaRegNewspaper/>,
        cName: 'nav-text',
        id: 'news'
    },
    {
        title : 'Principais ações',
        path: '/pa',
        icon: <MdIcons.MdOutlineTableChart/>,
        cName: 'nav-text',
        id: 'stocks'
    },
    {
        title : 'Meus Investimentos',
        path: '/mi',
        icon: <FaIcons.FaWallet/>,
        cName: 'nav-text',
        id: 'investments'
    },
    {
        title : 'Adicionar Investimentos',
        path: '/add-investment',
        icon: <Io5Icons.IoBagAddSharp/>,
        cName: 'nav-text',
        id: 'add-investments'
    },
    {
        title : 'Simular Investimentos',
        path: '/si',
        icon: <BsIcons.BsGraphUp/>,
        cName: 'nav-text',
        id: 'simulate'
    },
    {
        title : 'Meus dados',
        path: '/md',
        icon: <BsIcons.BsFillGearFill/>,
        cName: 'nav-text',
        id: 'account'
    },
    {
        title : 'Sair',
        icon: <MdIcons.MdLogout/>,
        cName: 'nav-text',
        id: 'logout'
    },
]