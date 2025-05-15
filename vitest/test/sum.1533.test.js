
import sum1533 from '../sum1533.js';
import { expect, test } from 'vitest';

test('adds 43 + 30 to equal 73 + offset 0.47008911105952844', () => {
  expect(sum1533(43, 30)).toBe(73 + 0.47008911105952844);
});
