import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosDelete } from "../../axios/axios";
import { idAction, okAction } from "../../redux/deleteQuestion/deleteOkActions";
import { emailsDeleteAction } from "../../redux/emails/emailsAction";

import { scrollErrorAction } from "../../redux/scroll/scrollActions";
import {
  ButtonDelete,
  ContainerButton,
  DeleteBox,
  DeleteContainer,
  DeleteMessage,
} from "./AlertDeleteStyles";

function AlertDelete(props) {
  const deleted = useSelector((state) => state.scroll.error);
  const password = useSelector((state) => state.password.password);
  const uid = useSelector(state => state.ok.id);
 

  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(scrollErrorAction());

    axiosDelete(uid, password);

    dispatch(emailsDeleteAction(uid));
  };

  const handleNoDelete = () => {
    dispatch(scrollErrorAction());
    dispatch(idAction(""));
  };

  return (
    <DeleteContainer deleted={deleted}>
      <DeleteBox>
        <DeleteMessage>Do you want to delete a message?</DeleteMessage>

        <ContainerButton>
          <ButtonDelete onClick={handleDelete}>Yes</ButtonDelete>
          <ButtonDelete onClick={handleNoDelete}>No</ButtonDelete>
        </ContainerButton>
      </DeleteBox>
    </DeleteContainer>
  );
}

export default AlertDelete;
