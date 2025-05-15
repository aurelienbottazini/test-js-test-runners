
import sum295 from '../sum295.js';
import { expect, test } from 'vitest';

test('adds 97 + 69 to equal 166 + offset 0.23333220958328882', () => {
  expect(sum295(97, 69)).toBe(166 + 0.23333220958328882);
});
