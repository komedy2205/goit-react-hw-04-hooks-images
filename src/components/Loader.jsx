import { data } from "./data";


export default function App() { 
  return (
    <div className="container mt-5 text-center">
      <h3>LOADING......</h3>
      <div className="row">
        {data.map((loader, index) => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 p-5">
            <div
              data-tip={loader.name}
              data-for="happyFace"
              key={loader.name + index}
              className="loaderBox"
            >
              <loader.Component {...loader.props} />
            </div>
          </div>
        ))}
      </div>
      </div>
      )
    };