
import sum3925 from '../sum3925.js';
import { expect, test } from 'vitest';

test('adds 0 + 79 to equal 79 + offset 0.9634119560978995', () => {
  expect(sum3925(0, 79)).toBe(79 + 0.9634119560978995);
});
