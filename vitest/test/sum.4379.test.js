
import sum4379 from '../sum4379.js';
import { expect, test } from 'vitest';

test('adds 31 + 81 to equal 112 + offset 0.4762318104996398', () => {
  expect(sum4379(31, 81)).toBe(112 + 0.4762318104996398);
});
