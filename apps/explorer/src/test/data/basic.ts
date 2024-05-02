import BN from 'bn.js'
import { Receipt } from 'types'

import { BATCH_TIME } from '../../const'

export const DATE: Date = new Date('2017-04-23T08:30:15.500Z') // Epoch: 1492936215500 mills
export const DATE_EPOCH = Math.floor(DATE.valueOf() / 1000) // 1492936215 sec
export const BATCH_ID = Math.floor(DATE_EPOCH / BATCH_TIME) // Math.floor(1492936215 / 300) = 4976454
export const BATCH_SECOND = DATE_EPOCH % BATCH_TIME // 1492936215 % 300 = 15

export const DEFAULT_PRECISION = 18

export const USER_1 = '0x1111111111111111111111111111111111111111'
export const USER_2 = '0x2222222222222222222222222222222222222222'
export const USER_3 = '0x3333333333333333333333333333333333333333'
export const USER_4 = '0x4444444444444444444444444444444444444444'
export const USER_5 = '0x5555555555555555555555555555555555555555'

export const FEE_TOKEN = '0x9999999999999999999999999999999999999990'
export const TOKEN_1 = '0x9999999999999999999999999999999999999991'
export const TOKEN_2 = '0x9999999999999999999999999999999999999992'
export const TOKEN_3 = '0x9999999999999999999999999999999999999993'
export const TOKEN_4 = '0x9999999999999999999999999999999999999994'
export const TOKEN_5 = '0x9999999999999999999999999999999999999995'
export const TOKEN_6 = '0x9999999999999999999999999999999999999996'
export const TOKEN_7 = '0x9999999999999999999999999999999999999997'
export const TOKEN_8 = '0x9999999999999999999999999999999999999998'
export const TOKEN_9 = '0x9999999999999999999999999999999999999999'

export const AMOUNT = new BN('1000000000000000000') // 1 Ether
export const AMOUNT_SMALL = new BN('200000000000000000') // 0.2 Ether

export const CONTRACT = '0x9046451F7cF124c1d7d1832F76F5e98a33D1610E'
export const TX_HASH = '0x29205e7bc98d650bd728be609bd9a8f8a77c55f66454ba1bc845a3ec6ba19d5f'

export const RECEIPT = {
  transactionHash: TX_HASH,
} as Receipt
// ok to cast for test data
