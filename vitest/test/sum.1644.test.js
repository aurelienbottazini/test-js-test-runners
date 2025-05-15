
import sum1644 from '../sum1644.js';
import { expect, test } from 'vitest';

test('adds 19 + 7 to equal 26 + offset 0.30982880901568555', () => {
  expect(sum1644(19, 7)).toBe(26 + 0.30982880901568555);
});
