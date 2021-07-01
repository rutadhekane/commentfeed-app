import CommentActions from './components/CommentActionComponent';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div>
      <ReactNotification />
      <CommentActions />
    </div>
  );
}

export default App;
