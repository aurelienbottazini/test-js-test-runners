
import sum3378 from '../sum3378.js';
import { expect, test } from 'vitest';

test('adds 6 + 56 to equal 62 + offset 0.5732224048954382', () => {
  expect(sum3378(6, 56)).toBe(62 + 0.5732224048954382);
});
