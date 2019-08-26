import Auth from './../hoc/Auth';
import LandingPage from "../views/LandingPage/LandingPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import LoginPage from "../views/LoginPage/LoginPage";
import Components from "../views/Components/Components";
import HomeComponent from './../containers/home';

const appRoutes = [
    {
        path: "/",
        title: "home",
        component: Auth(HomeComponent)
    },
    {
        path: "/components",
        title: "components",
        component: Auth(Components)
    },
    {
        path: "/landing",
        title: "landing",
        component: Auth(LandingPage)
    },
    {
        path: "/profile",
        title: "profile",
        component: Auth(ProfilePage)
    },
    {
        path: "/login",
        title: "login",
        component: Auth(LoginPage)
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Auth(Components)
    }
];

export default appRoutes
