import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/albums/";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {this.state.data.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  {Object.keys(this.state.data[0]).map((v) => (
                    <th>{v}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((v) => {
                  const row = v;
                  return (
                    <tr>
                      {Object.keys(row).map((u) => (
                        <td>{row[u]}</td>
                      ))}
                      <td>
                        <button
                          onClick={(e) => {
                            alert("Raw data = " + JSON.stringify(row));
                          }}
                        >
                          Show raw data
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <p>No data from API.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Table;
