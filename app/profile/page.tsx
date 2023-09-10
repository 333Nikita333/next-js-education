import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image src={session.user.image} alt="user image" width="50" height="50" />
      )}
    </div>
  );
};

export default Profile;
