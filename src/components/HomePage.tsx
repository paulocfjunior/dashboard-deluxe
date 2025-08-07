import React, { lazy, useState } from "react";
import { format } from "date-fns";
import { Button, Dialog } from "@mui/material";

const ReportModal = lazy(() => import("./ReportModal"));

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const today = format(new Date(), "MMMM do, yyyy");

  return (
    <div>
      <h1>Dashboard Home</h1>
      <p>Today's Date: {today}</p>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Generate Report
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <ReportModal />
      </Dialog>
    </div>
  );
};
export default HomePage;
