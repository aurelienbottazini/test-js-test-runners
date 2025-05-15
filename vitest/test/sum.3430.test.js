
import sum3430 from '../sum3430.js';
import { expect, test } from 'vitest';

test('adds 51 + 93 to equal 144 + offset 0.6612214755721244', () => {
  expect(sum3430(51, 93)).toBe(144 + 0.6612214755721244);
});
