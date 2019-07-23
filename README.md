Simple helper to reduce Redux reducers.

## Installation

```
npm install redux-reduce-reducers
```

OR

```
yarn add redux-reduce-reducers
```

## Usage

```
import reduceReducers from 'redux-reduce-reducers';

import reducer1 from '...';
import reducer2 from '...';
import reducer3 from '...';

const reducers = reduceReducers(reducer1, reducer2, reducer3);
```
