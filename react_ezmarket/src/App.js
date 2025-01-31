import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div style={style.main}>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<ExampleCompoment/>}>/</Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
