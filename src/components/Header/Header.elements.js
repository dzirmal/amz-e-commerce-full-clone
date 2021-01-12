import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  & > div {
    align-items: center;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid lightgray;
  margin: 10px 10px 10px 7px;
  padding: 10px 10px;
`

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`

export const HeaderOptionLineOne = styled.span`
  font-size: 10px;
`

export const HeaderOptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`

export const HeaderOptionCartCount = styled.span`
  margin-right: 10px;
  margin-left: 10px;
`

export const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`

export const Input = styled.input`
  flex: 1;
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  background-color: white;
`

export const Select = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 80px;
  border: 1px solid lightgray;
  margin: 10px 10px 10px 7px;
  padding: 10px 10px;
  cursor: pointer;
`

export const Option = styled.option`
  cursor: pointer;
`

export const SelectLanguages = styled.select`
  cursor: pointer;
`

export const Language = styled.option`
  cursor: pointer;
`

export const ImageLanguageFlag = styled.img`
  object-fit: contain;
  height: 30px;
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`

export const DeliverLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationIcon = styled.div``
