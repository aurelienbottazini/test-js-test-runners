
import sum3703 from '../sum3703.js';
import { expect, test } from 'vitest';

test('adds 1 + 61 to equal 62 + offset 0.14958187885912855', () => {
  expect(sum3703(1, 61)).toBe(62 + 0.14958187885912855);
});
