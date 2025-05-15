
import sum4252 from '../sum4252.js';
import { expect, test } from 'vitest';

test('adds 36 + 42 to equal 78 + offset 0.4661733240828497', () => {
  expect(sum4252(36, 42)).toBe(78 + 0.4661733240828497);
});
