
import sum3010 from '../sum3010.js';
import { expect, test } from 'vitest';

test('adds 60 + 42 to equal 102 + offset 0.6336086191045803', () => {
  expect(sum3010(60, 42)).toBe(102 + 0.6336086191045803);
});
