import React, { useState } from "react";
import { FaSearch, FaSuitcase, FaBuilding } from "react-icons/fa";

const Search = ({ onTermSubmit, user }) => {
  let [state, setState] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    onTermSubmit(state);
  };
  return (
    <div className="searchBlock">
      <form action="" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="Search profile"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </span>
        <span>
          <FaSearch />
        </span>
      </form>
      <hr />
      <main>
        <header>
          <figure>
            <img src={user.avatar_url} alt={user.login} />
          </figure>
          <h2>{user.login}</h2>
          <p>
            <span>
              <FaSuitcase />
            </span>
            {user.bio}
            <span></span>
          </p>
          <p>
            <span>
              <FaBuilding />
            </span>
            <span>{user.company}</span>
          </p>
        </header>
      </main>
    </div>
  );
};

export default Search;
