
import sum4925 from '../sum4925.js';
import { expect, test } from 'vitest';

test('adds 78 + 68 to equal 146 + offset 0.4202109667142522', () => {
  expect(sum4925(78, 68)).toBe(146 + 0.4202109667142522);
});
