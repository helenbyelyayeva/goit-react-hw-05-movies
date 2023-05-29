import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { Section } from "../components/Section/Section";
import { Details } from "../components/Details/Details";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Add-info/Nav";



export const MovieDetails = () => {
    const location = useLocation();
    const backLinkTo = location?.state?.from ? `${location.state?.from?.pathname}${location.state?.from?.search}` : '/';


    return (
        <main>
            <Section>
                <BackLink to={backLinkTo} />
                <Details />
            </Section>
            <Section title={'Additional information'}>
                <Navigation />
            </Section>
            <Outlet />
        </main>
    )
}