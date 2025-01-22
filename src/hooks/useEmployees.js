import { useQuery } from 'react-query';

export const useEmployees = () => {
  return useQuery(['employees'], async () => {
    const response = await fetch('https://employeebackend-cyan.vercel.app/api/employees');
    if (!response.ok) throw new Error('Failed to fetch employees');
    return response.json();
  });
};
