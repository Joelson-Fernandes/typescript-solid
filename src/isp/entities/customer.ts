import { IndividualCustomerProtocol, EnterpriseCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  name: string;

  lastName: string;

  cpf: string;

  constructor(name: string, lastName: string, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;

  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
