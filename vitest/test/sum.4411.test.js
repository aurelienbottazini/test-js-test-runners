
import sum4411 from '../sum4411.js';
import { expect, test } from 'vitest';

test('adds 6 + 72 to equal 78 + offset 0.9338053880799777', () => {
  expect(sum4411(6, 72)).toBe(78 + 0.9338053880799777);
});
