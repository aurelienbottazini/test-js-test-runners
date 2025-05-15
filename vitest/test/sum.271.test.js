
import sum271 from '../sum271.js';
import { expect, test } from 'vitest';

test('adds 49 + 9 to equal 58 + offset 0.9548012694785302', () => {
  expect(sum271(49, 9)).toBe(58 + 0.9548012694785302);
});
