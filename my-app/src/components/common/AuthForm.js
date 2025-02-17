import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const AuthForm = ({ mode, onAuthSubmit, children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onAuthSubmit) {
      if (mode === 'signup') {
        onAuthSubmit(email, password, name, role);
      } else {
        onAuthSubmit(email, password);
      }
    }
  };

  return (
    <Form mode={mode} onSubmit={handleFormSubmit}>
      {mode === 'onboarding' ? (
        <>
          <MainIcon />
        </>
      ) : (
        <>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />
          {mode === 'signup' && (
            <>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름"
                required
              />
              <MemberType>
                <RadioWrapper>
                  <Radio
                    type="radio"
                    id="company"
                    name="memberType"
                    value="COMPANY"
                    onChange={() => setRole('COMPANY')} // role을 'COMPANY'로 변경
                    checked={role === 'COMPANY'} // 선택된 값이 'COMPANY'일 때 체크
                    required
                  />
                  <Lable htmlFor="company">기업</Lable>
                </RadioWrapper>
                <RadioWrapper>
                  <Radio
                    type="radio"
                    id="candidate"
                    name="memberType"
                    value="CANDIDATE"
                    onChange={() => setRole('CANDIDATE')} // role을 'CANDIDATE'로 변경
                    checked={role === 'CANDIDATE'} // 선택된 값이 'CANDIDATE'일 때 체크
                    required
                  />
                  <Lable htmlFor="candidate">구직자</Lable>
                </RadioWrapper>
              </MemberType>
            </>
          )}
          <Button
            type="submit"
            width="352px"
            height="48px"
            backgroundColor="#3081F6"
            color="white"
            fontSize="20px"
            borderRadius="10px"
            marginTop="14px"
          >
            {mode === 'signup' ? '회원 가입' : '로그인'}
          </Button>
        </>
      )}
      {children}
    </Form>
  );
};

const Form = styled.form`
  width: ${({ mode }) => (mode === 'onboarding' ? '784px' : '400px')};
  height: ${({ mode }) => {
    if (mode === 'signup') return '406px';
    if (mode === 'onboarding') return '566px';
    return '345px';
  }};
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
`;

const Input = styled.input`
  width: 352px;
  height: 48px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 0 18px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline-color: #3081f6;
  }
`;
const MemberType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 352px;
`;
const RadioWrapper = styled.div`
  width: 352px;
`;
const Radio = styled.input`

`;
const Lable = styled.label`
`;

const MainIcon = styled.img`
  width: 150px;
  height: 167px; /* Corrected the typo */
  margin-top: 92px;
  margin-bottom: 48px;
`;

export default AuthForm;
