
import sum4022 from '../sum4022.js';
import { expect, test } from 'vitest';

test('adds 58 + 31 to equal 89 + offset 0.356910421816092', () => {
  expect(sum4022(58, 31)).toBe(89 + 0.356910421816092);
});
