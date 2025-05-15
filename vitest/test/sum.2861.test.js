
import sum2861 from '../sum2861.js';
import { expect, test } from 'vitest';

test('adds 88 + 84 to equal 172 + offset 0.7786970074854883', () => {
  expect(sum2861(88, 84)).toBe(172 + 0.7786970074854883);
});
