import React, { useState } from "react";
import moment from "moment";
import { Button, Dialog } from "@mui/material";
import ReportModal from "./ReportModal";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const today = moment().format("MMMM Do, YYYY");

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
