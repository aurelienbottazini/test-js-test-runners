
import sum1495 from '../sum1495.js';
import { expect, test } from 'vitest';

test('adds 77 + 59 to equal 136 + offset 0.5075543960553275', () => {
  expect(sum1495(77, 59)).toBe(136 + 0.5075543960553275);
});
