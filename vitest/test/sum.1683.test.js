
import sum1683 from '../sum1683.js';
import { expect, test } from 'vitest';

test('adds 24 + 19 to equal 43 + offset 0.19108524826176343', () => {
  expect(sum1683(24, 19)).toBe(43 + 0.19108524826176343);
});
