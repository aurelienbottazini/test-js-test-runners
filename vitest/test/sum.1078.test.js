
import sum1078 from '../sum1078.js';
import { expect, test } from 'vitest';

test('adds 83 + 30 to equal 113 + offset 0.8497115688670701', () => {
  expect(sum1078(83, 30)).toBe(113 + 0.8497115688670701);
});
