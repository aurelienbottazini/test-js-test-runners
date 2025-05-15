
import sum4395 from '../sum4395.js';
import { expect, test } from 'vitest';

test('adds 20 + 80 to equal 100 + offset 0.6878890145102508', () => {
  expect(sum4395(20, 80)).toBe(100 + 0.6878890145102508);
});
