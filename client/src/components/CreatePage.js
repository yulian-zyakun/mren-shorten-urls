import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [link, setLink] = useState("");
  const { request } = useHttp();
  useEffect(() => {
    window.M.updateTextFields();
  });
  const keyPressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        );
        history.push(`/details/${data.link._id}`);
      } catch (error) {}
    }
  };
  return (
    <div className="row pT">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input
            placeholder="Enter Link"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={keyPressHandler}
          />
          <label htmlFor="link">Link</label>
        </div>
        <p className="grey-text right">* hit enter to submit your link</p>
      </div>
    </div>
  );
};
