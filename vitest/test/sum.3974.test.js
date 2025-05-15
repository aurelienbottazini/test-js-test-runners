
import sum3974 from '../sum3974.js';
import { expect, test } from 'vitest';

test('adds 71 + 67 to equal 138 + offset 0.08809078376235524', () => {
  expect(sum3974(71, 67)).toBe(138 + 0.08809078376235524);
});
