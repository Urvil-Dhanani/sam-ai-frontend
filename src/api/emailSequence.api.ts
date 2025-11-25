const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const generateEmailSequence = async (jsonFile: File) => {
  const formData = new FormData();
  formData.append("file", jsonFile);

  const response = await fetch(`${BASE_URL}/email-sequence/generate`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};