
import sum2155 from '../sum2155.js';
import { expect, test } from 'vitest';

test('adds 27 + 71 to equal 98 + offset 0.34672530391874', () => {
  expect(sum2155(27, 71)).toBe(98 + 0.34672530391874);
});
