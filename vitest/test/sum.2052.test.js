
import sum2052 from '../sum2052.js';
import { expect, test } from 'vitest';

test('adds 82 + 65 to equal 147 + offset 0.991194907931852', () => {
  expect(sum2052(82, 65)).toBe(147 + 0.991194907931852);
});
