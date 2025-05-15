
import sum1367 from '../sum1367.js';
import { expect, test } from 'vitest';

test('adds 48 + 66 to equal 114 + offset 0.227238407865598', () => {
  expect(sum1367(48, 66)).toBe(114 + 0.227238407865598);
});
