
import sum4943 from '../sum4943.js';
import { expect, test } from 'vitest';

test('adds 48 + 34 to equal 82 + offset 0.7011694394916638', () => {
  expect(sum4943(48, 34)).toBe(82 + 0.7011694394916638);
});
