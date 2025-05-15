
import sum4196 from '../sum4196.js';
import { expect, test } from 'vitest';

test('adds 22 + 72 to equal 94 + offset 0.3706630310056057', () => {
  expect(sum4196(22, 72)).toBe(94 + 0.3706630310056057);
});
