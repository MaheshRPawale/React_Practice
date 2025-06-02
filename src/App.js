import './App.css';
import UserDetailses from './props/variable'; // ✅ same name as export

function App() {
  const name = "mahesh pawale";
  const age = 23;

  const userInfo = {
    salary: 123456,
    address: "pune vimannagar",
    department: "IT"
  };

  const hobbies = ["reading", "cycling", "eating", "gaming", "cooking"];

  return (
    <div className="App">
      <h1>hello react in app</h1>

      {/* ✅ Pass username and age too */}
      <UserDetailses username={name} userage={age} hobbies={hobbies} />
    </div>
  );
}

export default App;
