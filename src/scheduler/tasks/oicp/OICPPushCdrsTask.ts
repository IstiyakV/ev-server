import SchedulerTask from '../../SchedulerTask';
import { TaskConfig } from '../../../types/TaskConfig';
import Tenant from '../../../types/Tenant';

export default class OICPPushCdrsTask extends SchedulerTask {
  public async processTenant(tenant: Tenant, config: TaskConfig): Promise<void> {
    // TODO: Hubject expects the CDR right after the session
    // If there is an error, the CPO should send the CDR within 14 days
    // Hubject allows only one CDR per session

    // Post CDR
    // await OCPPUtils.processOICPTransaction(tenant.id, transaction, chargingStation, TransactionAction.END);
  }
}
