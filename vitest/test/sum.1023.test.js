
import sum1023 from '../sum1023.js';
import { expect, test } from 'vitest';

test('adds 12 + 61 to equal 73 + offset 0.9632028885289712', () => {
  expect(sum1023(12, 61)).toBe(73 + 0.9632028885289712);
});
