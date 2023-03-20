import Home from '~/pages/home';
import Follow from '~/pages/follow';
import Upload from '~/pages/upload';
import Search from '~/pages/search';
import Profile from '~/pages/profile';

import config from '~/config';

import {HeaderOnly} from '~/Layouts';

const publicRoutes = [
    { path: config.routes.home,  component: Home },
    { path: config.routes.following,  component: Follow,},
    { path: config.routes.profile,  component: Profile },
    { path: config.routes.upload,  component: Upload, Layout: HeaderOnly },
    { path: config.routes.search,  component: Search, Layout: null},
    
]

const privateRoutes = [

]
export {publicRoutes, privateRoutes}