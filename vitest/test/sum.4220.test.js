
import sum4220 from '../sum4220.js';
import { expect, test } from 'vitest';

test('adds 6 + 84 to equal 90 + offset 0.9906864414895216', () => {
  expect(sum4220(6, 84)).toBe(90 + 0.9906864414895216);
});
