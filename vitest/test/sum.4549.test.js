
import sum4549 from '../sum4549.js';
import { expect, test } from 'vitest';

test('adds 0 + 79 to equal 79 + offset 0.9325329242087951', () => {
  expect(sum4549(0, 79)).toBe(79 + 0.9325329242087951);
});
