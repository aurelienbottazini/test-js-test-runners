
import sum4564 from '../sum4564.js';
import { expect, test } from 'vitest';

test('adds 51 + 81 to equal 132 + offset 0.7830131778553441', () => {
  expect(sum4564(51, 81)).toBe(132 + 0.7830131778553441);
});
