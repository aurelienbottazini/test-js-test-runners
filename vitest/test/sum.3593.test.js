
import sum3593 from '../sum3593.js';
import { expect, test } from 'vitest';

test('adds 29 + 49 to equal 78 + offset 0.5530713465622753', () => {
  expect(sum3593(29, 49)).toBe(78 + 0.5530713465622753);
});
