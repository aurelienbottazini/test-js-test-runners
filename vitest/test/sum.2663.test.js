
import sum2663 from '../sum2663.js';
import { expect, test } from 'vitest';

test('adds 42 + 89 to equal 131 + offset 0.6046587319301796', () => {
  expect(sum2663(42, 89)).toBe(131 + 0.6046587319301796);
});
