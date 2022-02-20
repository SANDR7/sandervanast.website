import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { ServiceProp } from '../../types/services';

const ServiceData = () => {
  const { data } = useSWR<{ services: ServiceProp[]; length: string }>(
    '/api/services',
    fetcher
  );
  const serviceData = data;
  return serviceData;
};

export default ServiceData;
