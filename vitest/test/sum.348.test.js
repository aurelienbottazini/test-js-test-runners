
import sum348 from '../sum348.js';
import { expect, test } from 'vitest';

test('adds 25 + 30 to equal 55 + offset 0.16586734666099212', () => {
  expect(sum348(25, 30)).toBe(55 + 0.16586734666099212);
});
