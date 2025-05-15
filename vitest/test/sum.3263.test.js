
import sum3263 from '../sum3263.js';
import { expect, test } from 'vitest';

test('adds 72 + 57 to equal 129 + offset 0.32091694780047975', () => {
  expect(sum3263(72, 57)).toBe(129 + 0.32091694780047975);
});
