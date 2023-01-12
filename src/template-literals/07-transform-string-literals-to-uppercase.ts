type Event = 'log_in' | 'log_out' | 'sign_up'

type ObjectOfKeys = Record<Uppercase<Event>, string>

// example
type ValueOf<T> = T[keyof T]

export const TypePurchases = {
  firstSelfHostLicensePurchase: 'first_purchase',
  renewalSelfHost: 'renewal_self',
  monthlySubscription: 'monthly_subscription',
  annualSubscription: 'annual_subscription',
} as const;

export type MetadataGatherWireTransferKeys = `${ValueOf<typeof TypePurchases>}_alt_payment_method`

export type CustomerMetadataGatherWireTransfer = Partial<Record<MetadataGatherWireTransferKeys, string>>
