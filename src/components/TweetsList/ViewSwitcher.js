import React from 'react';

import {
    TweetsListContainer
} from './TweetsListContainer';

export const ViewSwitcher = ({view, switchView}) => (
    <div>

        <button type="button" className="btn btn-primary" onClick={switchView}>Switch view</button>


        <div className="row">
            {
                view === 1 && <div className="col">
                    <TweetsListContainer q={1}/>
                </div>
            }

            {
                view === 2 && <div className="col">
                    <TweetsListContainer q={2}/>
                </div>
            }
        </div>
    </div>
);