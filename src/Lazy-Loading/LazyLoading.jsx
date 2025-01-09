import { Suspense } from "react";
import { lazy } from "react";

const lazyloadingComponent = lazy(() => import("./LazyComponent"));

const lazyLoading = () => {
  <div>
    <h1>React Lazy Loading Example</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <lazyloadingComponent />
    </Suspense>
  </div>;
};
export default lazyLoading;
