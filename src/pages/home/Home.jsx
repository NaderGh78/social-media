import './home.scss';
import Posts from '../../components/posts/Posts';
import Share from '../../components/share/Share';
import Stories from '../../components/stories/Stories';

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Home = () => {
  return (
    <div className='home'>
      <Share />
      <Stories />
      <Posts />
    </div>
  )
}

export default Home;