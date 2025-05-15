
import sum3486 from '../sum3486.js';
import { expect, test } from 'vitest';

test('adds 54 + 75 to equal 129 + offset 0.6647612903207962', () => {
  expect(sum3486(54, 75)).toBe(129 + 0.6647612903207962);
});
