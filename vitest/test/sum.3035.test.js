
import sum3035 from '../sum3035.js';
import { expect, test } from 'vitest';

test('adds 25 + 34 to equal 59 + offset 0.2818112809147397', () => {
  expect(sum3035(25, 34)).toBe(59 + 0.2818112809147397);
});
