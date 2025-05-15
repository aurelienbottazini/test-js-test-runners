
import sum4875 from '../sum4875.js';
import { expect, test } from 'vitest';

test('adds 90 + 91 to equal 181 + offset 0.17266048631179232', () => {
  expect(sum4875(90, 91)).toBe(181 + 0.17266048631179232);
});
