
import sum3337 from '../sum3337.js';
import { expect, test } from 'vitest';

test('adds 46 + 48 to equal 94 + offset 0.7868423189460986', () => {
  expect(sum3337(46, 48)).toBe(94 + 0.7868423189460986);
});
