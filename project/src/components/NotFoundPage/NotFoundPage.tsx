import {Link} from 'react-router-dom';

const divStyle = {
  fontsize: '62px',
  color: 'black',
  margin: '50px 35%',
  width: '500px',
  heigth: '300px',
  backgroundColor: 'grey',
  padding: '50px 100px',
};

function NotFoundPage (): JSX.Element {
  return (
    <div style={divStyle}>
      <h1>404 Not found</h1>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}
export default NotFoundPage;
