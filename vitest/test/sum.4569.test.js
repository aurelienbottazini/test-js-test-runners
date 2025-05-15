
import sum4569 from '../sum4569.js';
import { expect, test } from 'vitest';

test('adds 19 + 97 to equal 116 + offset 0.8111970446460919', () => {
  expect(sum4569(19, 97)).toBe(116 + 0.8111970446460919);
});
