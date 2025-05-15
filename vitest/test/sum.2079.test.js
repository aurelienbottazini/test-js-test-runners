
import sum2079 from '../sum2079.js';
import { expect, test } from 'vitest';

test('adds 13 + 3 to equal 16 + offset 0.8835590821399351', () => {
  expect(sum2079(13, 3)).toBe(16 + 0.8835590821399351);
});
