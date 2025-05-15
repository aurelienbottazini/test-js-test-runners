
import sum1096 from '../sum1096.js';
import { expect, test } from 'vitest';

test('adds 31 + 77 to equal 108 + offset 0.6073732433935983', () => {
  expect(sum1096(31, 77)).toBe(108 + 0.6073732433935983);
});
