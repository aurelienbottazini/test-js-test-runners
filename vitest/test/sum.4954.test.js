
import sum4954 from '../sum4954.js';
import { expect, test } from 'vitest';

test('adds 1 + 23 to equal 24 + offset 0.8321107529298369', () => {
  expect(sum4954(1, 23)).toBe(24 + 0.8321107529298369);
});
