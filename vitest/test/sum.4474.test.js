
import sum4474 from '../sum4474.js';
import { expect, test } from 'vitest';

test('adds 43 + 39 to equal 82 + offset 0.9570792770425586', () => {
  expect(sum4474(43, 39)).toBe(82 + 0.9570792770425586);
});
