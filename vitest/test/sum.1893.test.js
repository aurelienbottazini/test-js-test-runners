
import sum1893 from '../sum1893.js';
import { expect, test } from 'vitest';

test('adds 89 + 89 to equal 178 + offset 0.051143294523383176', () => {
  expect(sum1893(89, 89)).toBe(178 + 0.051143294523383176);
});
