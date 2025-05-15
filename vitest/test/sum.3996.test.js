
import sum3996 from '../sum3996.js';
import { expect, test } from 'vitest';

test('adds 1 + 72 to equal 73 + offset 0.6364600779133035', () => {
  expect(sum3996(1, 72)).toBe(73 + 0.6364600779133035);
});
