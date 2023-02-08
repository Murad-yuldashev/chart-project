import ChartsPage from './components/Chart';
import EmployeeList from './components/EmployeeList';
import LineBarChart from './components/LineBarChart';
import EmployeeContextProvider from './contexts/EmployeeContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <EmployeeList />
            <ChartsPage />
            <LineBarChart />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
