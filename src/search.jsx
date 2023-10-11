import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ComboBox(params) {
    const [selectedValue, setSelectedValue] = useState(null);
    function onSubmit()
    {
        params.onSubm(selectedValue);
    }
    function onPopu()
    {
        params.onView();
    }
    return (<div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        onChange={(event, newValue) => {
            setSelectedValue(newValue);
        }}
        // sx={{ width: 300 }}
        lg={{with: 500}}
        renderInput={(params) => <TextField {...params} label="Company Tag" />}
      />
      <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >
                <Button variant="contained" onClick={onSubmit} >Search Tag </Button>
               
    </Stack></div>
    );
  }
  const top100Films = [
    "Apple",
    "Microsoft",
    "Amazon",
    "Google",
    "Meta",
    "Capgemini",
    "Goldman Sachs",
    "Deloitte",
    "Tencent",
    "IBM",
    "Oracle",
    "Adobe",
    "SAP",
    "Salesforce",
    "VMware",
    "NVIDIA",
    "Intel",
    "Netflix",
    "Qualcomm",
    "Cisco Systems",
    "Zoom Video Communications",
    "Square",
    "Spotify",
    "Slack",
    "ServiceNow",
    "Dell Technologies",
    "Hewlett Packard Enterprise",
    "Twitter",
    "Uber",
    "Samsung Electronics",
    "Sony",
    "Intuit",
    "Shopify",
    "Palantir Technologies",
    "Infosys",
    "Wipro",
    "Tata Consultancy Services",
    "ZoomInfo",
    "Twilio",
    "Snap Inc.",
    "Roku",
    "Red Hat",
    "Palo Alto Networks",
    "Okta",
    "Micron Technology",
    "Logitech",
    "Lenovo Group",
    "Fortinet",
    "Atlassian",
    "DocuSign",
    "CrowdStrike Holdings",
    "Cloudflare",
    "Akamai",]