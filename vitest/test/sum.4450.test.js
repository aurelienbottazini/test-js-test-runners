
import sum4450 from '../sum4450.js';
import { expect, test } from 'vitest';

test('adds 65 + 37 to equal 102 + offset 0.41041500416923893', () => {
  expect(sum4450(65, 37)).toBe(102 + 0.41041500416923893);
});
