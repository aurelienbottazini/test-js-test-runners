
import sum3982 from '../sum3982.js';
import { expect, test } from 'vitest';

test('adds 36 + 62 to equal 98 + offset 0.4972291869546618', () => {
  expect(sum3982(36, 62)).toBe(98 + 0.4972291869546618);
});
