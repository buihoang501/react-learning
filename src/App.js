import './App.css';
import { Fragment } from 'react';
/* Components */
import State from './components/State/State';
import Parent from './components/Props/Parent';
import Events from './components/Events/Events';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import Styles from './components/StylesComponent/Styles';
import Fragments from './components/Fragments/Fragments';
import Portals from './components/ReactPortals/Portals';
import Refs from './components/Refs/Refs';
import ForwardRefs from './components/Fragments/ForwardRefs';
import UseEffect from './components/useEffect/UseEffect';
import UseReducer from './components/useReducer/UseReducer';
import ChildContext from './components/Context/ChildContext';
import Context from './components/Context/Context';
import ChildContextNoWrapper from './components/Context/ChildContextNoWrapper';
import Counter from './components/UseContext&UserReducer/Counter';
import ContextAPIProvider from './components/UseContext&UserReducer/ContextAPIProvider';
import ParentMemo from './components/ReactMemo/ParentMemo';
import UseMemo from './components/UseMemo/UseMemo';
import UseCallback from './components/UseCallback/UseCallback';
import SameElementChild from './components/SameElementsReference/SameElementChild';
import SameElementParent from './components/SameElementsReference/SameElementParent';
import ClassState from './components/ClassComponent/ClassState';
import ClassProps from './components/ClassComponent/ClassProps';
import CounterClass from './components/ClassComponent/HigherOrderComponent/CounterClass';
import ClickCounterRenderProps from './components/ClassComponent/RenderProps/ClickCounterRenderProps';
import CounterRenderProps from './components/ClassComponent/RenderProps/CounterRenderProps';
import MountingOne from './components/ClassComponent/LifecycleMethods/Mounting/MountingOne';
import UpdatingA from './components/ClassComponent/LifecycleMethods/Updating/UpdatingA';
import UnMounting from './components/ClassComponent/LifecycleMethods/UnMounting/UnMounting';
import ErrorHandler from './components/ClassComponent/LifecycleMethods/ErrorHandling/ErrorHandler';
import PureComponent from './components/ClassComponent/PureComponent/PureComponent';
import FormHook from './components/CustomHooks/FormHook';
import HttpRequest from './components/CustomHooks/HttpRequest';
function App() {
  return (
    <Fragment>
      <div className='app'>
        {/* 1-State  */}
        {/* <State /> */}

        {/* 2-Props */}
        {/* <Parent /> */}

        {/* 3-Events Handler */}
        {/* <Events /> */}

        {/* 4-Conditional Content (Conditinal Rendering) */}
        {/* <ConditionalRendering /> */}

        {/* 5-Styles */}
        {/* <Styles /> */}

        {/* 6-Fragments */}
        {/* <Fragments /> */}

        {/* 7- React Portals */}
        {/* <Portals /> */}

        {/* 8-Ref */}
        {/* <Refs /> */}

        {/* 9-Forward Refs */}
        {/* <ForwardRefs /> */}

        {/* 10-Handling side effects with useEffect hook */}
        {/* <UseEffect /> */}

        {/* 11- useReducer hook*/}
        {/* <UseReducer /> */}

        {/* 12-Context */}
        {/* <Context>
          <ChildContext />
        </Context> */}
        {/* <ChildContextNoWrapper /> */}

        {/* 13-Context&Reducer  */}
        {/* <ContextAPIProvider>
          <Counter />
        </ContextAPIProvider> */}

        {/* 14-React Memo */}
        {/* <ParentMemo /> */}

        {/* 15-UseMemo */}
        {/* <UseMemo /> */}

        {/* 16-UseCallBack */}
        {/* <UseCallback /> */}

        {/* 17-Same Element Reference */}
        {/* <SameElementParent>
          <SameElementChild />
        </SameElementParent> */}

        {/* 18-Class State */}
        {/* <ClassState /> */}

        {/* 19-Class Props */}
        {/* <ClassProps /> */}

        {/* 20-Higher Order Component */}
        {/* <CounterClass /  */}

        {/* 21-Render Props */}
        {/* <CounterRenderProps
          render={(count, clickCounterHandler) => (
            <ClickCounterRenderProps
              count={count}
              clickCounterHandler={clickCounterHandler}
            />
          )}
        /> */}

        {/* 22- Mounting life cycle method */}
        {/* <MountingOne />*/}

        {/* 23- Updating life cycle method */}
        {/* <UpdatingA /> */}

        {/* 24-Unmounting life cycle method */}
        {/* <UnMounting /> */}

        {/* 25-Error Handler - Error Boundary */}
        {/* <ErrorHandler /> */}

        {/* 26-Pure Component */}
        {/* <PureComponent /> */}

        {/* 27-Use Input Custom Hook */}
        {/* <FormHook /> */}

        {/* 28-Use Http Custom Hook */}
        {/* <HttpRequest /> */}

        {/* 29-Use Store Hook Instead of redux */}
      </div>
    </Fragment>
  );
}
export default App;
