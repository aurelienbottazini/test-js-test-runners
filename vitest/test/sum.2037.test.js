
import sum2037 from '../sum2037.js';
import { expect, test } from 'vitest';

test('adds 58 + 64 to equal 122 + offset 0.97896036968208', () => {
  expect(sum2037(58, 64)).toBe(122 + 0.97896036968208);
});
