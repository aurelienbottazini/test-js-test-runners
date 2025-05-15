
import sum3140 from '../sum3140.js';
import { expect, test } from 'vitest';

test('adds 34 + 93 to equal 127 + offset 0.3521591290215951', () => {
  expect(sum3140(34, 93)).toBe(127 + 0.3521591290215951);
});
