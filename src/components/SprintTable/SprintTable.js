import "../../index.css";
import sprintTableData  from "../../MockData/TableData.json";
export const SprintTable = () => {
  return (
    <>
      <h1>Sprint table</h1>
      <div className="table-container">
        <table className="table table-secondary table-borderless">
          <thead className="table-dark">
            <tr>
              <td>Sprint Name</td>
              <td>Status</td>
              <td>Start Date</td>
              <td>End Date</td>
              <td>Completed Date</td>
            </tr>
          </thead>
          <tbody>
            {sprintTableData.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>{value.status}</td>
                  <td>{value.start_date}</td>
                  <td>{value.end_date}</td>
                  <td>{value.completed_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
