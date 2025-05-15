
import sum2647 from '../sum2647.js';
import { expect, test } from 'vitest';

test('adds 2 + 94 to equal 96 + offset 0.9709553791441328', () => {
  expect(sum2647(2, 94)).toBe(96 + 0.9709553791441328);
});
