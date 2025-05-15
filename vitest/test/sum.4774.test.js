
import sum4774 from '../sum4774.js';
import { expect, test } from 'vitest';

test('adds 61 + 49 to equal 110 + offset 0.6042035191133671', () => {
  expect(sum4774(61, 49)).toBe(110 + 0.6042035191133671);
});
