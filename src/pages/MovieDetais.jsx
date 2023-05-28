import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { Section } from "../components/Section/Section";
import { Details } from "../components/Details/Details";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Add-info/Nav";


export const MovieDetails = () => {
    const location = useLocation();
    let backLinkTo;

    if (location.pathname === '/movies') {
        backLinkTo = '/movies';
    } else {
        backLinkTo = '/';
    }

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