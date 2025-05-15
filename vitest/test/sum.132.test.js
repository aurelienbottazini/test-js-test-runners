
import sum132 from '../sum132.js';
import { expect, test } from 'vitest';

test('adds 55 + 92 to equal 147 + offset 0.3910657170049491', () => {
  expect(sum132(55, 92)).toBe(147 + 0.3910657170049491);
});
