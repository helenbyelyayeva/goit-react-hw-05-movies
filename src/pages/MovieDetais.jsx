import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { Section } from "../components/Section/Section";
import { Details } from "../components/Details/Details";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Add-info/Nav";
import { Suspense } from "react";
import { Loader } from 'components/Loader/Loader';


export const MovieDetails = () => {
    const location = useLocation();
    const backLinkTo = location?.state?.from ? `${location.state?.from?.pathname}${location.state?.from?.search}` : '/';


    return (
        <main>
            <Section>
                <BackLink to={backLinkTo} />
                <Details />
            </Section>
            <Suspense fallback={<Loader />}>
                <Section title={'Additional information'}>
                    <Navigation />
                </Section>
                <Outlet />
            </Suspense>
        </main>
    )
}

export default MovieDetails;