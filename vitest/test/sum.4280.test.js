
import sum4280 from '../sum4280.js';
import { expect, test } from 'vitest';

test('adds 1 + 49 to equal 50 + offset 0.4095565165796766', () => {
  expect(sum4280(1, 49)).toBe(50 + 0.4095565165796766);
});
