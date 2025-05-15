
import sum3532 from '../sum3532.js';
import { expect, test } from 'vitest';

test('adds 75 + 97 to equal 172 + offset 0.9463439920227177', () => {
  expect(sum3532(75, 97)).toBe(172 + 0.9463439920227177);
});
