
import sum4236 from '../sum4236.js';
import { expect, test } from 'vitest';

test('adds 24 + 28 to equal 52 + offset 0.07593922530622566', () => {
  expect(sum4236(24, 28)).toBe(52 + 0.07593922530622566);
});
