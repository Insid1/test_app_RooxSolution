import Sorting from '../sorting/sorting';
import UserProfile from '../user-profile/user-profile';

function UserPage() {
  return (
    <main>
      <Sorting />
      <div className="right-side">
        <UserProfile />
      </div>
    </main>
  );
}

export default UserPage;
