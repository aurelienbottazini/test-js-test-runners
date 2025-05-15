
import sum1038 from '../sum1038.js';
import { expect, test } from 'vitest';

test('adds 27 + 64 to equal 91 + offset 0.8478379524137623', () => {
  expect(sum1038(27, 64)).toBe(91 + 0.8478379524137623);
});
