
import sum4540 from '../sum4540.js';
import { expect, test } from 'vitest';

test('adds 96 + 37 to equal 133 + offset 0.4304228757637021', () => {
  expect(sum4540(96, 37)).toBe(133 + 0.4304228757637021);
});
