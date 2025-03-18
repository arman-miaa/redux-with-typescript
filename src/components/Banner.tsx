import { decrement, increment } from "../redux/features/counter/CounterSlice";


import { useAppDispatch, useAppSelector } from "../redux/hooks";


const Banner = () => {
  const count = useAppSelector((state) => state.counter.value);
  console.log(count);
   const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <h1 className="text-main">Heloo World </h1>
      <div>
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="border-2  p-2 mx-8 rounded-full border-blue-800">
          {count}
        </span>
        <button
          className="btn btn-primary "
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Banner