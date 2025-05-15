
import sum4865 from '../sum4865.js';
import { expect, test } from 'vitest';

test('adds 8 + 6 to equal 14 + offset 0.411196640297382', () => {
  expect(sum4865(8, 6)).toBe(14 + 0.411196640297382);
});
