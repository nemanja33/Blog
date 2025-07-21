import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Link className="primary" href={"/blog"}>
        Blog
      </Link>
    </div>
  );
};

export default Contact;
