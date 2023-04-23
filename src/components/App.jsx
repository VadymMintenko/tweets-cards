import { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { fetchData } from './Fetching';
import Pagination from './Pagination';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(() => {
    fetchData().then(data => setUsers(data));
  }, []);
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex);

  const Paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <UserCard users={currentUser} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        pagenate={Paginate}
      />
    </>
  );
};
