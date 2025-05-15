
import sum2049 from '../sum2049.js';
import { expect, test } from 'vitest';

test('adds 84 + 34 to equal 118 + offset 0.6336393568516742', () => {
  expect(sum2049(84, 34)).toBe(118 + 0.6336393568516742);
});
