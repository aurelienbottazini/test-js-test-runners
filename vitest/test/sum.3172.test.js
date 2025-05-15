
import sum3172 from '../sum3172.js';
import { expect, test } from 'vitest';

test('adds 13 + 15 to equal 28 + offset 0.6751664471115756', () => {
  expect(sum3172(13, 15)).toBe(28 + 0.6751664471115756);
});
