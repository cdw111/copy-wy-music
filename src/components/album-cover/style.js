import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  width: ${props => props.width + "px"};
  font-size: 12px;
  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      z-index: 100;
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }

    .cover {
      z-index: -1;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`