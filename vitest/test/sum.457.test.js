
import sum457 from '../sum457.js';
import { expect, test } from 'vitest';

test('adds 30 + 32 to equal 62 + offset 0.7032373764495706', () => {
  expect(sum457(30, 32)).toBe(62 + 0.7032373764495706);
});
