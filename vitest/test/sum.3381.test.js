
import sum3381 from '../sum3381.js';
import { expect, test } from 'vitest';

test('adds 58 + 79 to equal 137 + offset 0.648905632154007', () => {
  expect(sum3381(58, 79)).toBe(137 + 0.648905632154007);
});
