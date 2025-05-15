
import sum3294 from '../sum3294.js';
import { expect, test } from 'vitest';

test('adds 4 + 61 to equal 65 + offset 0.7318494515115114', () => {
  expect(sum3294(4, 61)).toBe(65 + 0.7318494515115114);
});
