
import sum2525 from '../sum2525.js';
import { expect, test } from 'vitest';

test('adds 16 + 72 to equal 88 + offset 0.4590598228694792', () => {
  expect(sum2525(16, 72)).toBe(88 + 0.4590598228694792);
});
