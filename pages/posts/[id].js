import Head from "next/head";
import PostInfo from "../../components/PostInfo";

// static site generation (SSG) - should generate static pages 
// for each post after the project build, (yarn build) so first 
// you need to determine how many of these pages should be created. 
// To do this, there is a function getStaticPaths
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // you need to form an array of paths
  const paths = data.map(({ id }) => ({
    // id values ​​must be a string, so you need to use 
    // toString, because the response from the server 
    // always comes in the form of a number
    params: { id: id.toString() },
  }));

  return {
    paths,
    // fallback: false so that if an error occurs, 
    // a 404 page will be returned
    fallback: false,
  };
};

// after that, these generated static pages need to be filled 
// with content and for this you can use getStaticProps
export const getStaticProps = async (context) => {
  // console.log(context)
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};
export default Post;
