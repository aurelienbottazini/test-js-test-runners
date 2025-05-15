
import sum492 from '../sum492.js';
import { expect, test } from 'vitest';

test('adds 83 + 98 to equal 181 + offset 0.20164610142620554', () => {
  expect(sum492(83, 98)).toBe(181 + 0.20164610142620554);
});
