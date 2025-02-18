import React from "react";
import { Link } from "react-router";

function Error404() {
  return (
    <div className="pageErreur">
      <h1 className="titresErreur">404</h1>
      <h2 className="errorMessage">
        Oops ! La page que vous cherchez n'existe pas.
      </h2>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}

export default Error404;
