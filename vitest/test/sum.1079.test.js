
import sum1079 from '../sum1079.js';
import { expect, test } from 'vitest';

test('adds 80 + 81 to equal 161 + offset 0.6885304069663893', () => {
  expect(sum1079(80, 81)).toBe(161 + 0.6885304069663893);
});
