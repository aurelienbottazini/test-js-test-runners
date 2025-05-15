
import sum4241 from '../sum4241.js';
import { expect, test } from 'vitest';

test('adds 69 + 22 to equal 91 + offset 0.24940558818735836', () => {
  expect(sum4241(69, 22)).toBe(91 + 0.24940558818735836);
});
