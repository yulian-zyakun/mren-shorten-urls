import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { LinksList } from "./LinksList";
import { Loader } from "./Loader";

export const LinksPage = () => {
  const { token } = useContext(AuthContext);
  const [links, setLinks] = useState([]);
  const { request, loading } = useHttp();

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request(`/api/link`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (error) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && <LinksList links={links} />}</>;
};
