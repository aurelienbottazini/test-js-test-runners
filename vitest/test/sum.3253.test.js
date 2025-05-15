
import sum3253 from '../sum3253.js';
import { expect, test } from 'vitest';

test('adds 65 + 96 to equal 161 + offset 0.7338882590130537', () => {
  expect(sum3253(65, 96)).toBe(161 + 0.7338882590130537);
});
