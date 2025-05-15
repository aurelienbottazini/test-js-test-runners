
import sum4354 from '../sum4354.js';
import { expect, test } from 'vitest';

test('adds 95 + 93 to equal 188 + offset 0.5753830115600229', () => {
  expect(sum4354(95, 93)).toBe(188 + 0.5753830115600229);
});
