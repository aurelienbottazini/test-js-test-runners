
import sum302 from '../sum302.js';
import { expect, test } from 'vitest';

test('adds 44 + 12 to equal 56 + offset 0.8384130872252953', () => {
  expect(sum302(44, 12)).toBe(56 + 0.8384130872252953);
});
