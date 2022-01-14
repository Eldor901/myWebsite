import React from "react";
import {
  Switch,
  Route,
  withRouter,
  Redirect,
  useLocation,
} from "react-router-dom";

import Home from "../pages/Home/home";
import Portfolio from "../pages/Portfolio/portfolio";
import MainLayout from "../layoutes/MainLayout/MainLayout";
import Blog from "../pages/Blog/blog";
import Resume from "../pages/Resume/resume";
import Contact from "../pages/Contact/contact";
import BlogDescription from "../pages/BlogDescription/blogDescription";

import { useTransition, animated } from "react-spring";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "scale(0.5) translateY(-50%)" },
    enter: { opacity: 1, transform: "scale(1) translateY(0)" },
    leave: { opacity: 0, transform: "scale(0.5) translateY(50%)" },
  });

  const publicRoutes = [
    {
      path: "/",
      layout: MainLayout,
      component: Home,
    },
    {
      path: "/portfolio",
      layout: MainLayout,
      component: Portfolio,
    },
    {
      path: "/blog",
      layout: MainLayout,
      component: Blog,
    },
    {
      path: "/resume",
      layout: MainLayout,
      component: Resume,
    },
    {
      path: "/contact",
      layout: MainLayout,
      component: Contact,
    },
    {
      path: "/blog/:id",
      layout: MainLayout,
      component: BlogDescription,
    },
  ];

  const publicRouteList = publicRoutes.map((item, id) => {
    return (
      <AppRoute
        key={id}
        exact
        path={item.path}
        layout={item.layout}
        component={item.component}
      />
    );
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        >{publicRouteList}
        <Redirect from="*" to="/404" />
      </Switch>
    </animated.div>
  ));
};

export default withRouter(Routes);
