import React from "react";
import "./App.css";

export default function App() {
  const projects = [
    {
      id: "9482",
      name: "Apex Industrial Nexus",
      comp: "Vanguard Logistics",
      cat: "Industrial",
      loc: "Chicago Metro, IL",
      st: "In Progress",
    },
    {
      id: "8819",
      name: "Tech Ridge Headquarters",
      comp: "Aura Systems Global",
      cat: "Corporate",
      loc: "Austin Tech Ridge, TX",
      st: "Planning",
    },
    {
      id: "7721",
      name: "Rhine-Main Distribution",
      comp: "EuroFreight Cont.",
      cat: "Industrial",
      loc: "Frankfurt Hub",
      st: "Under Review",
    },
    {
      id: "6438",
      name: "Sovereign Vault & Exchange",
      comp: "Sterling Trust",
      cat: "Banking",
      loc: "Manhattan, NY",
      st: "In Progress",
    },
    {
      id: "5104",
      name: "Solaria Seaside Resort",
      comp: "Solaria Group",
      cat: "Hospitality",
      loc: "Miami Coastal, FL",
      st: "Completed",
    },
  ];

  return (
    <div className="wrapper">
      <div className="card">
        <div className="head">
          <div>
            <h2>
              Recent Projects <span className="badge">48 Active Records</span>
            </h2>
            <p>
              Real-time status across commercial and industrial developments
            </p>
          </div>
          <div className="filters">
            <div className="search">
              <span>🔍</span>
              <input placeholder="Filter by project..." />
            </div>
            <select>
              <option>All Categories</option>
            </select>
            <select>
              <option>All Statuses</option>
            </select>
            <button>⬇ Export CSV</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>PROJECT DETAILS</th>
              <th>CATEGORY</th>
              <th>LOCATION</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i}>
                <td>
                  <div className="details">
                    <div className="icon">🏢</div>
                    <div>
                      <b>{p.name}</b>
                      <br />
                      <span>
                        #RMS-{p.id} {p.comp}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`cat ${p.cat.toLowerCase()}`}>{p.cat}</span>
                </td>
                <td className="loc">
                  <span>📍</span> {p.loc}
                </td>
                <td>
                  <span
                    className={`status ${p.st.toLowerCase().replace(" ", "-")}`}
                  >
                    ● {p.st}
                  </span>
                </td>
                <td className="actions">
                  <button>View Details</button>
                  <button>✎</button>
                  <button>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span>Showing 1 to 5 of 48 projects</span>
          <div className="pages">
            <button disabled>← Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>10</button>
            <button>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
