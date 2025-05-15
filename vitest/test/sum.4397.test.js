
import sum4397 from '../sum4397.js';
import { expect, test } from 'vitest';

test('adds 10 + 79 to equal 89 + offset 0.9569231441072258', () => {
  expect(sum4397(10, 79)).toBe(89 + 0.9569231441072258);
});
