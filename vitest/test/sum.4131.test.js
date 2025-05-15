
import sum4131 from '../sum4131.js';
import { expect, test } from 'vitest';

test('adds 88 + 75 to equal 163 + offset 0.6515267510856138', () => {
  expect(sum4131(88, 75)).toBe(163 + 0.6515267510856138);
});
