
import sum1120 from '../sum1120.js';
import { expect, test } from 'vitest';

test('adds 72 + 89 to equal 161 + offset 0.7707299716763499', () => {
  expect(sum1120(72, 89)).toBe(161 + 0.7707299716763499);
});
