
import sum4816 from '../sum4816.js';
import { expect, test } from 'vitest';

test('adds 87 + 78 to equal 165 + offset 0.5816670072375791', () => {
  expect(sum4816(87, 78)).toBe(165 + 0.5816670072375791);
});
