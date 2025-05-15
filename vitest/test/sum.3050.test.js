
import sum3050 from '../sum3050.js';
import { expect, test } from 'vitest';

test('adds 5 + 77 to equal 82 + offset 0.35288710235662846', () => {
  expect(sum3050(5, 77)).toBe(82 + 0.35288710235662846);
});
