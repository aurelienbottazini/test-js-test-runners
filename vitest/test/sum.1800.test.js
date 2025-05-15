
import sum1800 from '../sum1800.js';
import { expect, test } from 'vitest';

test('adds 78 + 64 to equal 142 + offset 0.042831230860591374', () => {
  expect(sum1800(78, 64)).toBe(142 + 0.042831230860591374);
});
