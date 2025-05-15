
import sum2697 from '../sum2697.js';
import { expect, test } from 'vitest';

test('adds 27 + 97 to equal 124 + offset 0.004736512514568636', () => {
  expect(sum2697(27, 97)).toBe(124 + 0.004736512514568636);
});
