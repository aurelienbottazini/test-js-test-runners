
import sum3386 from '../sum3386.js';
import { expect, test } from 'vitest';

test('adds 24 + 40 to equal 64 + offset 0.12019053429992099', () => {
  expect(sum3386(24, 40)).toBe(64 + 0.12019053429992099);
});
