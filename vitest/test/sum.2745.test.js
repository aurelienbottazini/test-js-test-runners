
import sum2745 from '../sum2745.js';
import { expect, test } from 'vitest';

test('adds 79 + 70 to equal 149 + offset 0.43035078824542783', () => {
  expect(sum2745(79, 70)).toBe(149 + 0.43035078824542783);
});
