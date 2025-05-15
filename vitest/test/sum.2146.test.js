
import sum2146 from '../sum2146.js';
import { expect, test } from 'vitest';

test('adds 73 + 40 to equal 113 + offset 0.6369354025352765', () => {
  expect(sum2146(73, 40)).toBe(113 + 0.6369354025352765);
});
