import styled from "styled-components";

export const LoadingContainer = styled.div`
width: 100%;
display: ${(props) => (props.scroll < 0 ? "none" : "flex")};
justify-content: center;
color: black;


`