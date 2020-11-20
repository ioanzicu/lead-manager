import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((resp) => {
      dispatch({
        type: GET_LEADS,
        payload: resp.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((resp) => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.reponse.data, err.reponse.status))
    );
};

// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post(`/api/leads/`, lead)
    .then((resp) => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: resp.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.reponse.data, err.reponse.status))
    );
};
