
import sum2913 from '../sum2913.js';
import { expect, test } from 'vitest';

test('adds 38 + 19 to equal 57 + offset 0.35742140312229165', () => {
  expect(sum2913(38, 19)).toBe(57 + 0.35742140312229165);
});
