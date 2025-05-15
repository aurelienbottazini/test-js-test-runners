
import sum351 from '../sum351.js';
import { expect, test } from 'vitest';

test('adds 30 + 31 to equal 61 + offset 0.5305704497754993', () => {
  expect(sum351(30, 31)).toBe(61 + 0.5305704497754993);
});
