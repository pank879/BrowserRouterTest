import('./styles/main.scss');
import React from 'react';
import { render } from 'react-dom';
import { Router ,BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';

import { isProduction } from './utils/constants';
import App from './components/App';
import stores from './stores/stores';

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import CountryStore from './stores/CountryStore';


const store = rehydrate();
const countryStore = CountryStore;

const renderApp = Component => {
  const browserHistory = createBrowserHistory();
  const routeStore = new RouterStore();
  const history = syncHistoryWithStore(browserHistory, routeStore);

	render(
		<AppContainer>
      {/*<Router history={browserHistory} basename="/visitorself" routing={routeStore} >*/}
			<BrowserRouter basename="/visitorself">
				{/*<Provider store={isProduction ? store : hotRehydrate()} routing={routeStore}>*/}
        <Provider store = {store} countryStore = {countryStore} routing={routeStore}>
					<App />
				</Provider>
			</BrowserRouter>
      {/*</Router>*/}
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
