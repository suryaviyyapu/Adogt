import Navigationbar from './components/Navigationbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import ProfileList from './components/ProfileList';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Profile/>
      <ProfileList/>
      <Footer/>
    </div>
  );
}

export default App;
