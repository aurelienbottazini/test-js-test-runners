
import sum2449 from '../sum2449.js';
import { expect, test } from 'vitest';

test('adds 38 + 11 to equal 49 + offset 0.10817198681058937', () => {
  expect(sum2449(38, 11)).toBe(49 + 0.10817198681058937);
});
