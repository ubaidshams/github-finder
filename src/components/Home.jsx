import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import Search from "./Search";
import Axios from "../apis/Axios";

const Home = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let client_id = "Iv1.31e70fa092f80361";
        let client_secret = "66ddc08488898cb7e4358e549437e3aff47b27ef";
        let users = await Axios.get(
          `/users/ubaidshams?Client_id${client_id}&Client_secret${client_secret}`
        );

        let ReposData = await Axios.get(
          `/users/ubaidshams/repos?Client_id${client_id}&Client_secret${client_secret}`
        );
        setLoading(true);
        setUser(users.data);
        setRepos(ReposData.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  let onTermSubmit = async term => {
    try {
      let client_id = "Iv1.31e70fa092f80361";
      let client_secret = "66ddc08488898cb7e4358e549437e3aff47b27ef";
      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );
      let reposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      setLoading(true);
      setUser(users.data);
      setRepos(reposData.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <section id="mainBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;
