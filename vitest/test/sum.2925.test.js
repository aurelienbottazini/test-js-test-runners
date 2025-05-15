
import sum2925 from '../sum2925.js';
import { expect, test } from 'vitest';

test('adds 78 + 25 to equal 103 + offset 0.07101566898208278', () => {
  expect(sum2925(78, 25)).toBe(103 + 0.07101566898208278);
});
