
import sum776 from '../sum776.js';
import { expect, test } from 'vitest';

test('adds 72 + 48 to equal 120 + offset 0.6419057115728951', () => {
  expect(sum776(72, 48)).toBe(120 + 0.6419057115728951);
});
