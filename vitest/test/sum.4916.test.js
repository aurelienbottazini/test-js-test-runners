
import sum4916 from '../sum4916.js';
import { expect, test } from 'vitest';

test('adds 85 + 56 to equal 141 + offset 0.38546981320107454', () => {
  expect(sum4916(85, 56)).toBe(141 + 0.38546981320107454);
});
