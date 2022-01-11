import { useState } from "react";

export const useFetchEmails = () => {
  const [fetchEmails, setFetchEmails] = useState(null);

  return { fetchEmails, setFetchEmails};
};
