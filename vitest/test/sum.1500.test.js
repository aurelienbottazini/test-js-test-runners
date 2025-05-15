
import sum1500 from '../sum1500.js';
import { expect, test } from 'vitest';

test('adds 56 + 23 to equal 79 + offset 0.10817321716029904', () => {
  expect(sum1500(56, 23)).toBe(79 + 0.10817321716029904);
});
