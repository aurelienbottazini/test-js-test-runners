
import sum1069 from '../sum1069.js';
import { expect, test } from 'vitest';

test('adds 19 + 38 to equal 57 + offset 0.6021756871011157', () => {
  expect(sum1069(19, 38)).toBe(57 + 0.6021756871011157);
});
