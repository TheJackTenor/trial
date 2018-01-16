import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './App.css'
import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
    console.log(this.props.data);
  }

  img = (x, i) =>
    <tr>
      <td className="border">{x.id}</td>
      <td className="border">{x.title}</td>
      <td className="border"><img src={x.thumbnailUrl}/></td>
    </tr>;

render() {
  const arr3 = Object.values(this.props.data);
  return arr3.length
    ? <table className="border">
        <tr>
          <th className="border">ID</th>
          <th className="border">Title</th>
          <th className="border">Picture</th>
        </tr>
        {arr3.map(this.img)}
      </table>
    : <h1>loading...</h1>;
}
}


const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
