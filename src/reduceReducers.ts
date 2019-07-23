import { AnyAction, Reducer } from 'redux';

export default function reduceReducers<State>(
    ...reducers: Reducer<State | undefined>[]
) {
    return (state: State | undefined, action: AnyAction) =>
        reducers.reduce(
            (current: State | undefined, reducer: Reducer<State | undefined>) =>
                reducer(current, action),
            state
        ) as State;
}
