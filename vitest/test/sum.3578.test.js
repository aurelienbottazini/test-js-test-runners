
import sum3578 from '../sum3578.js';
import { expect, test } from 'vitest';

test('adds 58 + 16 to equal 74 + offset 0.35304950421126124', () => {
  expect(sum3578(58, 16)).toBe(74 + 0.35304950421126124);
});
