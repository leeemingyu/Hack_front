import axios from 'axios';

const URL = 'http://43.202.117.62:8080';

// Candidates API
export const registerCandidate = async (data) => {
  try {
    const response = await axios.post(`${URL}/candidates/register`, data);
    return response.data;
  } catch (error) {
    console.error('Candidate registration failed:', error);
    throw error;
  }
};

export const getCandidateById = async (id) => {
  try {
    const response = await axios.get(`${URL}/candidates/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch candidate:', error);
    throw error;
  }
};

export const getCandidates = async () => {
  try {
    const response = await axios.get(`${URL}/candidates`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch candidates:', error);
    throw error;
  }
};

// Companies API
export const registerCompany = async (data) => {
  try {
    const response = await axios.post(`${URL}/companies/register`, data);
    return response.data;
  } catch (error) {
    console.error('Company registration failed:', error);
    throw error;
  }
};

export const getCompanyById = async (id) => {
  try {
    const response = await axios.get(`${URL}/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch company:', error);
    throw error;
  }
};

export const getCompanyInfo = async () => {
  try {
    const response = await axios.get(`${URL}/companies/companyInfo`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch company info:', error);
    throw error;
  }
};

// Offers API
export const createOffer = async (data) => {
  try {
    const response = await axios.post(`${URL}/offers`, data);
    return response.data;
  } catch (error) {
    console.error('Offer creation failed:', error);
    throw error;
  }
};

export const respondToOffer = async (offerId, data) => {
  try {
    const response = await axios.put(`${URL}/offers/${offerId}/respond`, data);
    return response.data;
  } catch (error) {
    console.error('Failed to respond to offer:', error);
    throw error;
  }
};

export const getOffersByCompanyId = async (companyId) => {
  try {
    const response = await axios.get(`${URL}/offers/company/${companyId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch offers for company:', error);
    throw error;
  }
};

export const getOffersByCandidateId = async (candidateId) => {
  try {
    const response = await axios.get(`${URL}/offers/candidate/${candidateId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch offers for candidate:', error);
    throw error;
  }
};
