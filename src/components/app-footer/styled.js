import styled from 'styled-components';
export const FooterWrapper = styled.div`
    background-color: #f2f2f2;
    border-top: 1px solid #d3d3d3;
    position: relative;
    height: 172px;
    overflow: hidden;
    .content {
        display: flex;
        justify-content: space-between
    }
`

export const FooterLeft = styled.div`
    padding-top: 15px;
    width: 520px;
    height: 91px;
    div:nth-child(1) {
        height: 24px;
        line-height: 24PX;
    }
    div:nth-child(2) {
        height: 24px;
        line-height: 24PX;
    }
    div:nth-child(3) {
        height: 28px;
        line-height: 28PX;
        /* span {
            width: 28px;
            height: 28px;
            background: url(${require("@/assets/img/sprite_01.png.png")}) no-repeat;
            background-size: auto;
        } */
    }
`

// export const FooterRight = styled.div`
//     width: 460px;
//     height: 103px;
//     background-color: red;
// `

export const FooterRight = styled.ul`
  display: flex;
    padding-top: 30px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@/assets/img/sprite_footer_02.png.jpg")});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png.jpg")});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`