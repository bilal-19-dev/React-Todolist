import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };
const icon = (
    <div style={{ color: 'black', backgroundColor: 'orange', height:'300px'}}>
        <p>Hello world :)</p>
    </div>
);

export default function AccordionUsage() {
    const [expanded, setExpanded] = useState(true);
return (
    <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography component="span">Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    <Switch  onChange={(e) => {
                            setExpanded(e.target.checked);
                    }} defaultChecked />
            </AccordionDetails>
        </Accordion>
        <Collapse in={expanded} collapsedSize={50} >{icon}</Collapse>
    </div>
);
}

