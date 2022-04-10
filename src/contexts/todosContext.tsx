import React from 'react';
import { RecoilRoot } from "recoil";

const StoreProviderTodos: React.FC = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
);

export default StoreProviderTodos;
