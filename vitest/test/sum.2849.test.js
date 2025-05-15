
import sum2849 from '../sum2849.js';
import { expect, test } from 'vitest';

test('adds 86 + 80 to equal 166 + offset 0.13393678607763604', () => {
  expect(sum2849(86, 80)).toBe(166 + 0.13393678607763604);
});
