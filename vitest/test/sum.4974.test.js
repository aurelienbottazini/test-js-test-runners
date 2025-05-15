
import sum4974 from '../sum4974.js';
import { expect, test } from 'vitest';

test('adds 65 + 76 to equal 141 + offset 0.16998544342618638', () => {
  expect(sum4974(65, 76)).toBe(141 + 0.16998544342618638);
});
