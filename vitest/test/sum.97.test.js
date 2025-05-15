
import sum97 from '../sum97.js';
import { expect, test } from 'vitest';

test('adds 28 + 59 to equal 87 + offset 0.37284117944301853', () => {
  expect(sum97(28, 59)).toBe(87 + 0.37284117944301853);
});
