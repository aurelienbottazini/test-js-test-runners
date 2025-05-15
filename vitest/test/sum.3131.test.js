
import sum3131 from '../sum3131.js';
import { expect, test } from 'vitest';

test('adds 14 + 0 to equal 14 + offset 0.7984988583432817', () => {
  expect(sum3131(14, 0)).toBe(14 + 0.7984988583432817);
});
