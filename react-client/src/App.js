import { Switch, Route } from 'react-router-dom'


// rutas Poll
import PollResult from './pages/PollResult'
import Polls from './pages/Polls'
import CreatePoll from './pages/CreatePoll'
import VotePoll from './pages/VotePoll'


function App() {
  return (
    <div >
      <div style={{ margin: 20 }}>
        <Switch>
          {/* Listar http://localhost:8000/api/poll/ */}
          {/* http://localhost:3000 */}
          <Route exact path="/" component={Polls} />

          {/* Crear http://localhost:8000/api/poll/new */}
          {/* http://localhost:3000/polls/new */}
          <Route exact path="/polls/new" component={CreatePoll} />



          {/* reagresa uno muestra grafico  http://localhost:8000/api/poll/:id */}
          {/* http://localhost:3000/polls/:_id */}
          <Route exact path="/polls/:_id" component={PollResult} />



          {/* Actualizar patch http://localhost:8000/api/poll/vote/:id */}
          {/* http://localhost:3000/polls/:_id/vote */}
          <Route exact path="/polls/:_id/vote" component={VotePoll} />


        </Switch>
      </div>
    </div>
  );
}

export default App;
