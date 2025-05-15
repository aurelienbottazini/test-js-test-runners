
import sum3916 from '../sum3916.js';
import { expect, test } from 'vitest';

test('adds 76 + 52 to equal 128 + offset 0.004063161031045981', () => {
  expect(sum3916(76, 52)).toBe(128 + 0.004063161031045981);
});
