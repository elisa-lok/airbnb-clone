import styled from 'styled-components';

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight:600;
  color: ${props => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-weight: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }

    }
  }

  .profile {
    display: flex;
    align-items: center;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    margin-right: 24px;
    color: ${props => props.theme.textColor.primaryColor};
    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      width: 260px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      top: 60px;
      right: 20px;
      border-radius: 10px;

      .top, .bottom {
        padding: 10px 0;

        .item {
          width: 100%;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }

    }
  }
`