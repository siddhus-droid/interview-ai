import { auth } from "../../firebase/firebase";

function ProfileCard() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg">
      <h2 className="text-2xl font-bold">
        Welcome 👋
      </h2>

      <p className="mt-4">
        Email:
      </p>

      <p className="text-cyan-400 break-all">
        {auth.currentUser?.email}
      </p>
    </div>
  );
}

export default ProfileCard;