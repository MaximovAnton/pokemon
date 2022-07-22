import './App.css';
import Header from './Components/Header/Header'
import ContentContainer from './Components/Content/ContentContainer';


function App({state}) {
  
  return (
    <div className='app'>
      <Header />
      <ContentContainer state={state}/>
    </div>
  );
}

export default App;
