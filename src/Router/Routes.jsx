import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Route/Home";
import Collage from "../Component/Route/Collage/Collage";
import History from "../Component/Route/History/History";
import AcademicStructure from "../Component/Route/AcademicStructure/AcademicStructure";
import Infastructue from "../Component/Route/Infastructure/Infastructue";
import InformationPurity from "../Component/Route/InformationPurity/InformationPurity";
import Target from "../Component/Route/Target/Target"
import Application from "../Component/Application/Application";
import AdmissionTest from "../Component/AdmissionTest/AdmissionTest";
import AdmissionRule from "../Component/AdmissionRule/AdmissionRule";
import RegistrationSystem from "../Component/RegistrationSystem/RegistrationSystem";

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/collage',
                element:<Collage/>,
            },
            {
                path:'/history',
                element:<History/>,
            },
            {
                path:'/target',
                element:<Target/>,
            },
            {
                path:'/academic-structure',
                element:<AcademicStructure/>,
            },
            {
                path:'/academic-infrastructure',
                element:<Infastructue/>,
            },
            {
                path:'/information-of-purity',
                element:<InformationPurity/>
            },
            {
                path:'/application-process',
                element:<Application/>,
            },
            {
                path:'/admission-test',
                element:<AdmissionTest/>
            },
            {
                path:'/admission-rule',
                element:<AdmissionRule/>
            },
            {
                path:'/registration-system',
                element:<RegistrationSystem/>
            }
        ]
    }
])