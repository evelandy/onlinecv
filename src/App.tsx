import React, { ChangeEventHandler, useEffect } from 'react';
import { TopNav } from './components/Nav';
import { BrowserRouter, Route, Switch, RouteComponentProps  } from 'react-router-dom';
import routes from './config/routes';
import './components/styles/appStyles.css';
import './components/styles/darkMode.css';

const App = () => {
  const storedTheme = localStorage.getItem("theme");
  
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  }

  const themeToggler = () => {
    return (
      <div className="toggle-theme-wrapper mt-14 mb-16">
        <span>☀️</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            defaultChecked={defaultDark}
          />
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>
    );
  }
  
  useEffect(() => {
    storedTheme === 'dark' ? setDark() : setLight();
  }, [storedTheme])

  // sets default theme
  useEffect(() => {
    if (defaultDark) {
      setDark();
    } else {
      setLight();
    }
  }, []);

  return (
    <div className={'w-9/12 mx-auto appContainer'}>
      <BrowserRouter>
      <TopNav toggleTheme={toggleTheme} defaultDark={defaultDark} />
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route 
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                  name={route.name}
                  globalTheme={storedTheme}
                  {...props}
                  {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
        <span className=''>{themeToggler()}</span>
      </BrowserRouter>
    </div>
  );
}

export default App;
