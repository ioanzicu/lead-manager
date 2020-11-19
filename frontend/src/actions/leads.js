import axios from "axios";

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
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post(`/api/leads/`, lead)
    .then((resp) => {
      dispatch({
        type: ADD_LEAD,
        payload: resp.data,
      });
    })
    .catch((err) => console.log(err));
};
