
import sum3507 from '../sum3507.js';
import { expect, test } from 'vitest';

test('adds 16 + 48 to equal 64 + offset 0.5476153930322066', () => {
  expect(sum3507(16, 48)).toBe(64 + 0.5476153930322066);
});
