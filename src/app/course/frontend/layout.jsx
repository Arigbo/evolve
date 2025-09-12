import { NavCrumbs } from "@/components/navCrombs";


export default function FrontendSubject({ currentSubject, closeModal, children }) { 
    return (
 <>
<NavCrumbs></NavCrumbs>
 {children}</>
    )
}