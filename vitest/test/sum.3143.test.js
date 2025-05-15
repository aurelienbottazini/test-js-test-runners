
import sum3143 from '../sum3143.js';
import { expect, test } from 'vitest';

test('adds 75 + 75 to equal 150 + offset 0.9624993748497344', () => {
  expect(sum3143(75, 75)).toBe(150 + 0.9624993748497344);
});
