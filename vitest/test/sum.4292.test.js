
import sum4292 from '../sum4292.js';
import { expect, test } from 'vitest';

test('adds 68 + 51 to equal 119 + offset 0.26686470895758296', () => {
  expect(sum4292(68, 51)).toBe(119 + 0.26686470895758296);
});
