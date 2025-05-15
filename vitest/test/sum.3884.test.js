
import sum3884 from '../sum3884.js';
import { expect, test } from 'vitest';

test('adds 2 + 40 to equal 42 + offset 0.8898237408664157', () => {
  expect(sum3884(2, 40)).toBe(42 + 0.8898237408664157);
});
