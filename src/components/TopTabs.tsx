import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


type TabLabels = {
    labels: string[],
}

export const TopTabs = ({labels} : TabLabels) => {
        let rendered_tabs: React.ReactNode[] = [];
        for (let l of labels) {
            rendered_tabs.push(
                <Tab key={l} label={l} />
            );
        }

        return (<Paper square>
            <Tabs
                value={0}
                centered
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="top page navigation tabs"
                >
                {rendered_tabs}
            </Tabs>
        </Paper>);
}
