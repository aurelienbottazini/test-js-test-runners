
import sum2701 from '../sum2701.js';
import { expect, test } from 'vitest';

test('adds 21 + 45 to equal 66 + offset 0.03683964894335445', () => {
  expect(sum2701(21, 45)).toBe(66 + 0.03683964894335445);
});
