
import sum1815 from '../sum1815.js';
import { expect, test } from 'vitest';

test('adds 29 + 80 to equal 109 + offset 0.1992034576298337', () => {
  expect(sum1815(29, 80)).toBe(109 + 0.1992034576298337);
});
