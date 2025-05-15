
import sum3093 from '../sum3093.js';
import { expect, test } from 'vitest';

test('adds 61 + 8 to equal 69 + offset 0.9070742588133524', () => {
  expect(sum3093(61, 8)).toBe(69 + 0.9070742588133524);
});
