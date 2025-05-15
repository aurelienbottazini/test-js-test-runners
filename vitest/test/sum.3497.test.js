
import sum3497 from '../sum3497.js';
import { expect, test } from 'vitest';

test('adds 4 + 84 to equal 88 + offset 0.2747288442823229', () => {
  expect(sum3497(4, 84)).toBe(88 + 0.2747288442823229);
});
