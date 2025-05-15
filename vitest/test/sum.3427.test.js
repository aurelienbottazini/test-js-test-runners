
import sum3427 from '../sum3427.js';
import { expect, test } from 'vitest';

test('adds 27 + 87 to equal 114 + offset 0.19761366631766364', () => {
  expect(sum3427(27, 87)).toBe(114 + 0.19761366631766364);
});
