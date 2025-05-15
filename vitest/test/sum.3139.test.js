
import sum3139 from '../sum3139.js';
import { expect, test } from 'vitest';

test('adds 60 + 76 to equal 136 + offset 0.9751597218810455', () => {
  expect(sum3139(60, 76)).toBe(136 + 0.9751597218810455);
});
