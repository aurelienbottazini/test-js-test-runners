
import sum3245 from '../sum3245.js';
import { expect, test } from 'vitest';

test('adds 39 + 40 to equal 79 + offset 0.5110842586411612', () => {
  expect(sum3245(39, 40)).toBe(79 + 0.5110842586411612);
});
