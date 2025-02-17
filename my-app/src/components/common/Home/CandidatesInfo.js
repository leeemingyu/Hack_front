import React, { useState, useEffect } from 'react';
import { getCandidates } from '../../../utils/api'; // API 함수 import

const CandidatesInfo = () => {
  const [companies, setCompanies] = useState(); // 전체 회사 정보를 저장
  const [error, setError] = useState(''); // 에러 상태

  useEffect(() => {
    const fetchCandidatesInfo = async () => {
      try {
        const response = await getCandidates();
        console.log(response);
        setCompanies(response || []); // 응답 데이터가 없을 경우 빈 배열로 설정
      } catch (err) {
        console.error('전체 회사 정보를 가져오는 데 실패했습니다.', err);
        setError('회사를 찾을 수 없습니다.');
      }
    };

    fetchCandidatesInfo(); // 컴포넌트가 마운트될 때 API 호출
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  if (error) {
    return <div>{error}</div>;
  }

  if (companies === undefined) {
    return <div>로딩 중...</div>;
  }

  if (companies.length === 0) {
    return <div>구직자 정보가 없습니다.</div>;
  }

  return (
    <div>
      <h2>구직자 목록</h2>
      {companies.map((candidates) => (
        <div key={candidates.id}>
          <h3>{candidates.name}</h3>
          <p>주소: {candidates.address}</p>
          <p>카테고리: {candidates.category}</p>
          <p>설명: {candidates.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidatesInfo;
