
import sum1211 from '../sum1211.js';
import { expect, test } from 'vitest';

test('adds 50 + 80 to equal 130 + offset 0.45818403175072375', () => {
  expect(sum1211(50, 80)).toBe(130 + 0.45818403175072375);
});
