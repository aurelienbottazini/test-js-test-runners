
import sum1407 from '../sum1407.js';
import { expect, test } from 'vitest';

test('adds 28 + 56 to equal 84 + offset 0.6363152807520104', () => {
  expect(sum1407(28, 56)).toBe(84 + 0.6363152807520104);
});
