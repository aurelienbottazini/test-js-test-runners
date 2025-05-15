
import sum4904 from '../sum4904.js';
import { expect, test } from 'vitest';

test('adds 79 + 63 to equal 142 + offset 0.23955158370507157', () => {
  expect(sum4904(79, 63)).toBe(142 + 0.23955158370507157);
});
