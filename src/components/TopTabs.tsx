import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

type TabLabels = {
    labels: string[],
}

export default function TopTabs({labels} : TabLabels) {
        const [value, setValue] = React.useState(0);

        const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            setValue(newValue);
        };

        let rendered_tabs: React.ReactNode[] = [];
        for (let l of labels) {
            rendered_tabs.push(
                <Tab key={l} label={l} />
            );
        }

        return (
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleChange}
                    centered
                    aria-label="top page navigation tabs"
                    className="topt"
                    >
                    {rendered_tabs}
                </Tabs>
            </Paper>
        );
}
