
import sum1135 from '../sum1135.js';
import { expect, test } from 'vitest';

test('adds 38 + 76 to equal 114 + offset 0.7043178179277982', () => {
  expect(sum1135(38, 76)).toBe(114 + 0.7043178179277982);
});
