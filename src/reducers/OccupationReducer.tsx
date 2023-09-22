import { useReducer } from 'react';
import IOccupations from '../interfaces/IOccupations';
import {
  OccupationContext,
  OccupationDispatchContext,
} from '../OccupationsContext';

interface IAction {
  payload: {
    occupations?: IOccupations;
    headlineInput: string;
    textInput: string;
  };
  type: string;
}

interface IState {
  occupations: IOccupations | undefined;
  headlineInput: string;
  textInput: string;
}

const initialState: IState = {
  occupations: undefined,
  headlineInput: '',
  textInput: '',
};

function OccupationReducer(_state: IState, action: IAction): IState {
  switch (action.type) {
    case 'updated': {
      return {
        occupations: action.payload.occupations,
        headlineInput: action.payload.headlineInput,
        textInput: action.payload.textInput,
      };
    }
    case 'deleted': {
      return initialState;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OccupationProvider({ children }: any) {
  const [state, dispatch] = useReducer(OccupationReducer, initialState);

  return (
    <OccupationContext.Provider value={{ state }}>
      <OccupationDispatchContext.Provider value={dispatch}>
        {children}
      </OccupationDispatchContext.Provider>
    </OccupationContext.Provider>
  );
}

export default OccupationProvider;
