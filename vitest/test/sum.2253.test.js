
import sum2253 from '../sum2253.js';
import { expect, test } from 'vitest';

test('adds 87 + 95 to equal 182 + offset 0.8594017497083305', () => {
  expect(sum2253(87, 95)).toBe(182 + 0.8594017497083305);
});
