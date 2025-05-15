
import sum4771 from '../sum4771.js';
import { expect, test } from 'vitest';

test('adds 25 + 92 to equal 117 + offset 0.48190412951267514', () => {
  expect(sum4771(25, 92)).toBe(117 + 0.48190412951267514);
});
