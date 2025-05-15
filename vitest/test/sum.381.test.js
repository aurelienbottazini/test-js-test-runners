
import sum381 from '../sum381.js';
import { expect, test } from 'vitest';

test('adds 6 + 52 to equal 58 + offset 0.22955878663479556', () => {
  expect(sum381(6, 52)).toBe(58 + 0.22955878663479556);
});
