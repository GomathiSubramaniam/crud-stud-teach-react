import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import TeachCompontent from './Compontents/TeachCompontent';
import UserCompontent from './Compontents/UserCompontent';
import { AddUser } from './Compontents/AddUser';
import { AddTeach } from './Compontents/AddTeach';
import { data } from './Data/Student';
import { staff } from './Data/Teacher';
import { useState } from 'react';
import { Nopage } from './Compontents/NoPage';
import { UserDetails } from './Compontents/UserDetails';
import { TeachDetails } from './Compontents/Teachdetails';
import { EditUser } from './Compontents/EditUser';
import { EditTeach } from './Compontents/EditTeach';



function App() {
  const [user, setUser] = useState(data)
  const [teach, setTeach] = useState(staff)
  const history = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="nav-styles">
            <span>
              <button className="nav-btn"
                onClick={() => history.push("/Student")}
              >Student</button>
            </span>
            <span>
              <button className="nav-btn"
                onClick={() => history.push("/Teacher")}
              >Teacher</button>
            </span>

          </div>

        </Route>

        <Route path="/Student">
          <UserCompontent
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/Teacher">
          <TeachCompontent
            teach={teach}
            setTeach={setTeach}
          />
        </Route>

        <Route path="/add/user">
          <AddUser
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path="/add/teach">
          <AddTeach
            teach={teach}
            setTeach={setTeach}
          />
        </Route>

        <Route path="/edit/:id">
          <EditUser
            user={user}
            setUser={setUser} />
        </Route>

        <Route path="/edits/:id">
          <EditTeach
            teach={teach}
            setTeach={setTeach} />
        </Route>

        <Route path="/user/:id">
          <UserDetails
            user={user} />
        </Route>

        <Route path="/teach/:id">
          <TeachDetails
            teach={teach} />
        </Route>

        <Route path="***">

          <Nopage />
        </Route>
      </Switch>

    </div>

  );
}

export default App;
