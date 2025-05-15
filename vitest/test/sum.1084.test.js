
import sum1084 from '../sum1084.js';
import { expect, test } from 'vitest';

test('adds 21 + 26 to equal 47 + offset 0.42605592274958715', () => {
  expect(sum1084(21, 26)).toBe(47 + 0.42605592274958715);
});
