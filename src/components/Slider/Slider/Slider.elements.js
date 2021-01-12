import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: -150px;
  overflow: hidden;
`

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  border: 1px solid lightgray;
  border-radius: 50%;
  height: 100px;
  background: none;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  align-items: center;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
  }
  &.go__left {
    left: 0;
  }
  &.go__right {
    right: 0;
  }
`
