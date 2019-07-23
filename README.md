Simple helper to reduce Redux reducers.

## Installation

```bash
npm install redux-reduce-reducers
```

OR

```bash
yarn add redux-reduce-reducers
```

## Usage

```javascript
import reduceReducers from 'redux-reduce-reducers';

import reducer1 from '...';
import reducer2 from '...';
import reducer3 from '...';

const reducers = reduceReducers(reducer1, reducer2, reducer3);
```
