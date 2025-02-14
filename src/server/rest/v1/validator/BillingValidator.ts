import { HttpDeletePaymentMethod, HttpPaymentMethods } from '../../../../types/requests/HttpBillingRequest';

import { BillingSettings } from '../../../../types/Setting';
import Schema from '../../../../types/validator/Schema';
import SchemaValidator from '../../../../validator/SchemaValidator';
import fs from 'fs';
import global from '../../../../types/GlobalType';

export default class BillingValidator extends SchemaValidator {
  private static instance: BillingValidator|null = null;
  private billingSettingUpdate: Schema;
  private billingGetUserPaymentMethods: Schema;
  private billingDeleteUserPaymentMethod: Schema;
  private billingSetupUserPaymentMethod: Schema;

  private constructor() {
    super('BillingValidator');
    this.billingSettingUpdate = JSON.parse(fs.readFileSync(`${global.appRoot}/assets/server/rest/v1/schemas/billing/billing-setting-update.json`, 'utf8'));
    this.billingGetUserPaymentMethods = JSON.parse(fs.readFileSync(`${global.appRoot}/assets/server/rest/v1/schemas/billing/billing-payment-methods-get.json`, 'utf8'));
    this.billingDeleteUserPaymentMethod = JSON.parse(fs.readFileSync(`${global.appRoot}/assets/server/rest/v1/schemas/billing/billing-delete-payment-method.json`, 'utf8'));
    this.billingSetupUserPaymentMethod = JSON.parse(fs.readFileSync(`${global.appRoot}/assets/server/rest/v1/schemas/billing/billing-setup-payment-method.json`, 'utf8'));
  }

  public static getInstance(): BillingValidator {
    if (!BillingValidator.instance) {
      BillingValidator.instance = new BillingValidator();
    }
    return BillingValidator.instance;
  }

  public validateBillingSettingUpdateReq(data: Record<string, unknown>): BillingSettings {
    return this.validate(this.billingSettingUpdate, data);
  }

  public validateBillingGetUserPaymentMethodsReq(data: Record<string, unknown>): HttpPaymentMethods {
    return this.validate(this.billingGetUserPaymentMethods, data);
  }

  public validateBillingDeleteUserPaymentMethodReq(data: Record<string, unknown>): HttpDeletePaymentMethod {
    return this.validate(this.billingDeleteUserPaymentMethod, data);
  }

  public validateBillingSetupUserPaymentMethodReq(data: Record<string, unknown>): HttpDeletePaymentMethod {
    return this.validate(this.billingSetupUserPaymentMethod, data);
  }
}
