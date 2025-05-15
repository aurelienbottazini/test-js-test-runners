
import sum3197 from '../sum3197.js';
import { expect, test } from 'vitest';

test('adds 37 + 41 to equal 78 + offset 0.14815271695463406', () => {
  expect(sum3197(37, 41)).toBe(78 + 0.14815271695463406);
});
