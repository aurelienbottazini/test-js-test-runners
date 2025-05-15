
import sum1968 from '../sum1968.js';
import { expect, test } from 'vitest';

test('adds 30 + 45 to equal 75 + offset 0.20978796995943216', () => {
  expect(sum1968(30, 45)).toBe(75 + 0.20978796995943216);
});
