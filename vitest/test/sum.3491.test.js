
import sum3491 from '../sum3491.js';
import { expect, test } from 'vitest';

test('adds 77 + 41 to equal 118 + offset 0.8777705785580967', () => {
  expect(sum3491(77, 41)).toBe(118 + 0.8777705785580967);
});
