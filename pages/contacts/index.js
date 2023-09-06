import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";

// getStaticProps - in fact, a request is made
// on the server, not on the client, and returns
// props for the component itself
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                {name}({email})
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
