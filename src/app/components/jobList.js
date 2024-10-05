import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experienceItems = {
    "Web Impact": { 
      jobTitle: "Frontend Developer @ ",
      duration: "SEPT 2022 - JULY 2024",
      description: [
        "Developed adaptive websites to revamp online presence for local businesses, enhancing user engagement and improving accessibility while aligning with consistent branding, user-friendly layouts, and seamless interactions",
        "Collaborated with team of five designers, four engineers, and a product lead to make client-driven decisions, designing features to boost social media engagement and consolidate information for enhanced accessibility"
      ]
    },
    // "Hey Mentor": {
    //   jobTitle: "Chief Officer of Development @ ",
    //   duration: "JUNE 2022 - JULY 2023",
    //   description: [
    //     "Oversaw social media initiatives, managed growth channels on Facebook, Instagram, and LinkedIn, resulting in increased engagement and brand visibility",
    //     "Created and distributed 10 monthly newsletters to improve mentors and mentees’ awareness of ongoing initiatives while arranged an alumni network on LinkedIn, consisting of 20+ members, facilitating networking opportunities and promoting professional connections"
    //   ]
    // },
  }

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{ 
        flexGrow: 1, 
        bgcolor: 'background.paper', 
        display: 'flex', 
        height: 200,
        color: "paynesGray",
        "& .MuiTabs-indicator": {
          backgroundColor: "#576978",
        },
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ 
          borderRight: 1, 
          borderColor: "silver",
          "& .MuiTabs-vertical": {
            marginHorizontal: "2rem",
          },
          "& .MuiTab-wrapper": {
            whiteSpace: "nowrap",
            textAlign: "left",
            alignItems: "flexStart",
            fontFamily: "Satoshi"
          }
        }}
      >
        {Object.entries(experienceItems).map(([companyName, experience], i) => (
          <Tab 
            value={i} 
            {...a11yProps(i)} 
            key={companyName} 
            label={companyName}
            sx={{
              color: "#0b100d",
              '&.Mui-selected': {
                color: "#576978",
              }
            }}
          />
        ))}
      </Tabs>
      {Object.entries(experienceItems).map(([companyName, experience], i) => (
        <span className="ml-8">
          <TabPanel value={value} index={i} key={companyName}>
            <span className="joblist-job-title text-night text-3xl font-bold font-satoshi">
              {experience.jobTitle + " "}
            </span>
            <span className="joblist-job-company text-paynes-gray text-3xl font-bold font-satoshi">
              {companyName}
            </span>
            <div className="joblist-duration font-satoshi font-bold text-paynes-gray text-lg">
              {experience.duration}
            </div>
            <ul className="job-description font-satoshi text-night text-md mt-6">
              {experience.description.map((desc, i) => (
                <li key={i} className="py-2">
                  <span className="text-paynes-gray px-2">▹ </span>
                  {desc}
                </li>
              ))}
            </ul>
          </TabPanel>
        </span>
      ))}
    </Box>
  );
}