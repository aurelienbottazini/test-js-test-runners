
import sum2933 from '../sum2933.js';
import { expect, test } from 'vitest';

test('adds 49 + 64 to equal 113 + offset 0.10379025430367506', () => {
  expect(sum2933(49, 64)).toBe(113 + 0.10379025430367506);
});
