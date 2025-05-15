
import sum2876 from '../sum2876.js';
import { expect, test } from 'vitest';

test('adds 50 + 91 to equal 141 + offset 0.9901990401027422', () => {
  expect(sum2876(50, 91)).toBe(141 + 0.9901990401027422);
});
