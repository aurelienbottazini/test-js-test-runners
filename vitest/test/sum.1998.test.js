
import sum1998 from '../sum1998.js';
import { expect, test } from 'vitest';

test('adds 55 + 53 to equal 108 + offset 0.047992710702610686', () => {
  expect(sum1998(55, 53)).toBe(108 + 0.047992710702610686);
});
