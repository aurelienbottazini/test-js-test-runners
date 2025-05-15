
import sum4020 from '../sum4020.js';
import { expect, test } from 'vitest';

test('adds 41 + 66 to equal 107 + offset 0.27299887247879795', () => {
  expect(sum4020(41, 66)).toBe(107 + 0.27299887247879795);
});
