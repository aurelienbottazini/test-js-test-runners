
import sum3824 from '../sum3824.js';
import { expect, test } from 'vitest';

test('adds 43 + 74 to equal 117 + offset 0.8608852715214157', () => {
  expect(sum3824(43, 74)).toBe(117 + 0.8608852715214157);
});
