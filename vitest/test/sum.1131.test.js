
import sum1131 from '../sum1131.js';
import { expect, test } from 'vitest';

test('adds 61 + 19 to equal 80 + offset 0.9989982034309218', () => {
  expect(sum1131(61, 19)).toBe(80 + 0.9989982034309218);
});
