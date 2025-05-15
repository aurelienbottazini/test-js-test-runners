
import sum2552 from '../sum2552.js';
import { expect, test } from 'vitest';

test('adds 81 + 3 to equal 84 + offset 0.48188813681071097', () => {
  expect(sum2552(81, 3)).toBe(84 + 0.48188813681071097);
});
