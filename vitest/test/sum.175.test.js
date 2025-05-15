
import sum175 from '../sum175.js';
import { expect, test } from 'vitest';

test('adds 41 + 14 to equal 55 + offset 0.7695831712148256', () => {
  expect(sum175(41, 14)).toBe(55 + 0.7695831712148256);
});
