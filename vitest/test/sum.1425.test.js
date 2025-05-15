
import sum1425 from '../sum1425.js';
import { expect, test } from 'vitest';

test('adds 88 + 81 to equal 169 + offset 0.06407453200754032', () => {
  expect(sum1425(88, 81)).toBe(169 + 0.06407453200754032);
});
