import React from "react";
import { AddPlusIcon } from "./AddPlusIcon";
import { ArrowIcon } from "./ArrowIcon";
import { ClientsIcon } from "./ClientsIcon";
import { CloseIcon } from "./CloseIcon";
import { CommonDataIcon } from "./CommonDataIcon";
import { DocumentsIcon } from "./DocumentsIcon";
import { EditIcon } from "./EditIcon";
import { EmailIcon } from "./EmailIcon";
import { HistoryIcon } from "./HistoryIcon";
import { LoginLogo } from "./LoginLogo";
import { PasswordIcon } from "./PasswordIcon";
import { PlanningIcon } from "./PlanningIcon";
import { ProccessingIcon } from "./ProccessingIcon";
import { SaveMoveIcon } from "./SaveMoveIcon";
import { TelebonTicketIcon } from "./TelebonTicketIcon";
import { UserIcon } from "./UserIcon";



// export type EIcons =  'comments' | 'hide' | 'menu' | 'report' | 'save' | 'share';

export enum EIcons {
    close,
    email,
    login,
    password,
    telebonticket,
    edit,
    user,
    clientIcon,
    processing,
    addplus,
    arrow,
    savemove,
    history,
    commondata,
    documents,
    planning
} 


const ICONS: Record<EIcons, any> = {
    [EIcons.close]: CloseIcon,
    [EIcons.email]: EmailIcon,
    [EIcons.login]: LoginLogo,
    [EIcons.password]: PasswordIcon,
    [EIcons.telebonticket]: TelebonTicketIcon,
    [EIcons.edit]: EditIcon,
    [EIcons.user]: UserIcon,
    [EIcons.clientIcon]: ClientsIcon,
    [EIcons.processing]: ProccessingIcon,
    [EIcons.addplus]: AddPlusIcon,
    [EIcons.arrow]: ArrowIcon,
    [EIcons.savemove]: SaveMoveIcon,
    [EIcons.history]: HistoryIcon,
    [EIcons.commondata]: CommonDataIcon,
    [EIcons.documents]: DocumentsIcon,
    [EIcons.planning]: PlanningIcon,

}


interface IIconProps {
    name: EIcons;
}

export function Icon(props: IIconProps) {
    const {
        name,
    } = props

    const ChosenIcon = ICONS[name];
    return (
        <ChosenIcon />
    )
}