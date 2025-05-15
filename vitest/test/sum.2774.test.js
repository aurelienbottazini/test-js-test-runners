
import sum2774 from '../sum2774.js';
import { expect, test } from 'vitest';

test('adds 41 + 38 to equal 79 + offset 0.43265764713194066', () => {
  expect(sum2774(41, 38)).toBe(79 + 0.43265764713194066);
});
