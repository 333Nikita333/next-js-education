import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

// getServerSideProps function used for asynchronous 
// requests in SSR approach
export const getServerSideProps = async (context) => {
  // context argument under the hood contains request and response data
  // console.log(context);
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contact: data },
  };
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
