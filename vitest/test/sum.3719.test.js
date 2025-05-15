
import sum3719 from '../sum3719.js';
import { expect, test } from 'vitest';

test('adds 3 + 56 to equal 59 + offset 0.2510544979496764', () => {
  expect(sum3719(3, 56)).toBe(59 + 0.2510544979496764);
});
