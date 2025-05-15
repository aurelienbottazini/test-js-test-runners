
import sum3590 from '../sum3590.js';
import { expect, test } from 'vitest';

test('adds 37 + 23 to equal 60 + offset 0.5582228692566699', () => {
  expect(sum3590(37, 23)).toBe(60 + 0.5582228692566699);
});
