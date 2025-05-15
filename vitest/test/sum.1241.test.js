
import sum1241 from '../sum1241.js';
import { expect, test } from 'vitest';

test('adds 48 + 91 to equal 139 + offset 0.6259327190192523', () => {
  expect(sum1241(48, 91)).toBe(139 + 0.6259327190192523);
});
