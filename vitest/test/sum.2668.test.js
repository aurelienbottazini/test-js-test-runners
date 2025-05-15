
import sum2668 from '../sum2668.js';
import { expect, test } from 'vitest';

test('adds 73 + 35 to equal 108 + offset 0.6751282561258676', () => {
  expect(sum2668(73, 35)).toBe(108 + 0.6751282561258676);
});
