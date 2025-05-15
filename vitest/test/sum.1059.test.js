
import sum1059 from '../sum1059.js';
import { expect, test } from 'vitest';

test('adds 3 + 91 to equal 94 + offset 0.23298226017332457', () => {
  expect(sum1059(3, 91)).toBe(94 + 0.23298226017332457);
});
