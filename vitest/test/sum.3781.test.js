
import sum3781 from '../sum3781.js';
import { expect, test } from 'vitest';

test('adds 41 + 31 to equal 72 + offset 0.18727887728169912', () => {
  expect(sum3781(41, 31)).toBe(72 + 0.18727887728169912);
});
