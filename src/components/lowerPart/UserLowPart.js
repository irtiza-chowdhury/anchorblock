import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import option from '../../assets/images/options.png';
import { useGetUsersQuery } from '../../features/users/usersApi';
import ErrorMessage from '../ui/ErrorMessage';
import RotatingLine from '../ui/loaders/RotatingLine';

export default function UserLowPart() {
  const [currentPage, setCurrentPage] = useState(1);

  const [postLength, setPostLength] = useState(0);
  const [postsPerPage] = useState(5);
  const { data: allUsers, isLoading, isError, error } = useGetUsersQuery() || {};

  const { data } = allUsers || {};

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setPostLength(data?.length);
  }, [data]);

  let content = null;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center mt-[40px]">
        <RotatingLine />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message={error?.status} />;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <ErrorMessage message="No users found" />;
  }

  if (!isLoading && !isError && data?.length > 0) {
    content = currentPosts.map((user) => (
      <div
        key={user.id}
        className="sigle-user flex items-center space-x-[10px] mobile:space-x-[15px] md:space-x-[20px] text-small md:text-base text-[#4E5D78] font-semibold"
      >
        <div className="w-[8%] md:w-[10%]"> {user.id} </div>
        <div className="flex items-center space-x-[5px] md:space-x-[20px] w-[38%] mobile:w-[43%]">
          <img
            className="h-[35px] w-[35px] mobile:h-[45px] mobile:w-[45px] md:h-[60px] md:w-[60px] rounded-[8px] mobile:rounded-[12px]  md:rounded-[15px]"
            src={user.avatar}
            alt="user"
          />
          <div className="break-normal ">
            {user.first_name} {user.last_name}
          </div>
        </div>
        <div className="w-[30%] break-all md:w-[37%] ">{user.email}</div>
        <div className="w-[8%] cursor-pointer">
          <img src={option} alt="options" />
        </div>
      </div>
    ));
  }

  return (
    <>
      <div>
        <div className="px-[5px] mobile:px-[10] md:px-[30px] py-[15px] bg-[#FAFBFC] rounded-[12px]">
          <div className="space-x-[30px] flex text-[#4E5D78] text-small font-semibold tracking-[0.07em] uppercase">
            <div className=" w-[10%]">#ID</div>
            <div className=" w-[40%] md:w-[45%]">User</div>
            <div className=" w-[25%] md:w-[30%]">Email</div>
            <div className=" w-[18%] md:w-[10%]">option</div>
          </div>
        </div>
        <div className=" mobile:px-[10px] md:px-[30px] mt-[20px] space-y-[40px]">{content}</div>
      </div>
      <ReactPaginate
        onPageChange={paginate}
        pageCount={Math.ceil(postLength / Number(postsPerPage))}
        breakLabel="..."
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        previousLabel="<"
        nextLabel=">"
        containerClassName="pagination"
        pageLinkClassName="page-number"
        previousLinkClassName="page-number"
        nextLinkClassName="page-number"
        activeLinkClassName="active"
      />

      <div />
    </>
  );
}
