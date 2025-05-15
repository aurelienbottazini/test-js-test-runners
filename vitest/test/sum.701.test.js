
import sum701 from '../sum701.js';
import { expect, test } from 'vitest';

test('adds 4 + 60 to equal 64 + offset 0.9187259069147926', () => {
  expect(sum701(4, 60)).toBe(64 + 0.9187259069147926);
});
