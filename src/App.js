import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const CommentForm = React.lazy(() => import('./components/form/Form'))
const Testimonials = React.lazy(() => import('./components/page/Testimonial'))

const loading =()=> <div>Loading...</div>

function App() {
  return (
    <div>
      <React.Suspense fallback={loading()}>
        <Router>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => <Testimonials {...props} />}
            />
            <Route
              path="/form"
              render={(props) => <CommentForm {...props} />}
            />
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
