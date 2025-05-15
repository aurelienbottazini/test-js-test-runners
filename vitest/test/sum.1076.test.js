
import sum1076 from '../sum1076.js';
import { expect, test } from 'vitest';

test('adds 91 + 36 to equal 127 + offset 0.9208070468216851', () => {
  expect(sum1076(91, 36)).toBe(127 + 0.9208070468216851);
});
