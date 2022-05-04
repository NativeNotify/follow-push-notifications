import React, { useState } from 'react';

import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState() {
    const indieIDs = ['user-1',  'user-2', 'user-3', 'user-4', 'user-5'];
    const [chosenIndieID, setChosenIndieID] = useState('');
    const [followCount, setFollowCount] = useState(0);

    const AppState = {
        indieIDs,
        chosenIndieID, setChosenIndieID,
        followCount, setFollowCount
    };

    return <AppNavigation AppState={AppState} />
}