
import sum4056 from '../sum4056.js';
import { expect, test } from 'vitest';

test('adds 28 + 96 to equal 124 + offset 0.8912752094763133', () => {
  expect(sum4056(28, 96)).toBe(124 + 0.8912752094763133);
});
