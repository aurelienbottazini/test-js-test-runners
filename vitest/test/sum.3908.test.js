
import sum3908 from '../sum3908.js';
import { expect, test } from 'vitest';

test('adds 74 + 33 to equal 107 + offset 0.6661864834778416', () => {
  expect(sum3908(74, 33)).toBe(107 + 0.6661864834778416);
});
