
import sum4044 from '../sum4044.js';
import { expect, test } from 'vitest';

test('adds 46 + 29 to equal 75 + offset 0.12450374940165976', () => {
  expect(sum4044(46, 29)).toBe(75 + 0.12450374940165976);
});
