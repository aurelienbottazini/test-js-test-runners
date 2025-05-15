
import sum3107 from '../sum3107.js';
import { expect, test } from 'vitest';

test('adds 40 + 89 to equal 129 + offset 0.4813044042493082', () => {
  expect(sum3107(40, 89)).toBe(129 + 0.4813044042493082);
});
