
import sum2845 from '../sum2845.js';
import { expect, test } from 'vitest';

test('adds 21 + 98 to equal 119 + offset 0.5516357748738707', () => {
  expect(sum2845(21, 98)).toBe(119 + 0.5516357748738707);
});
