
import sum3461 from '../sum3461.js';
import { expect, test } from 'vitest';

test('adds 64 + 1 to equal 65 + offset 0.033580623519111064', () => {
  expect(sum3461(64, 1)).toBe(65 + 0.033580623519111064);
});
