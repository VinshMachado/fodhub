import React from "react";
import { useRouter } from "next/router";

const Searching = () => {
  const router = useRouter();
  const placename = router.query.search; // Destructure to get the 'name' parameter

  return <div>{placename}</div>;
};

export default Searching;
