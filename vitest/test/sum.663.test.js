
import sum663 from '../sum663.js';
import { expect, test } from 'vitest';

test('adds 8 + 71 to equal 79 + offset 0.7060012926533425', () => {
  expect(sum663(8, 71)).toBe(79 + 0.7060012926533425);
});
