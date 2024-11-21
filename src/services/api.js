import axios from "axios";

const api = axios.create({
  baseURL: "https://elderly-care-three.vercel.app",
});

// Endpoints de contatos de emergência
export const deleteContact = async (contactId) => {
  const response = await api.delete(`/contacts/${contactId}`);
  return response.data;
};

export const getContactById = async (contactId) => {
  const response = await api.get(`/contacts/${contactId}`);
  return response.data;
};

export const getContacts = async () => {
  const response = await api.get('/contacts');
  return response.data;
};

export const addContact = async (contactData) => {
  const response = await api.post('/contacts', contactData);
  return response.data;
};

export const updateContact = async (contactData) => {
  const response = await api.put(`/contacts/${contactData.contactId}`, contactData);
  return response.data;
};

// Endpoints de consultas e exames
export const addMedicalService = async (serviceData) => {
  const response = await api.post('/medicalServices', serviceData);
  return response.data;
};

export const deleteMedicalService = async (serviceId) => {
  const response = await api.delete(`/medicalServices/${serviceId}`);
  return response.data;
};

export const updateMedicalService = async (serviceData) => {
  const response = await api.put(`/medicalServices/${serviceData.serviceId}`, serviceData);
  return response.data;
};

export const getMedicalServices = async (serviceType) => {
  const response = await api.get(`/medicalServices/${serviceType}`);
  return response.data;
};

export const getMedicalServiceById = async (serviceId) => {
  const response = await api.get(`/medicalServices/service/${serviceId}`);
  return response.data;
};
