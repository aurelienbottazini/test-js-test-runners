
import sum3612 from '../sum3612.js';
import { expect, test } from 'vitest';

test('adds 50 + 61 to equal 111 + offset 0.8029430889139955', () => {
  expect(sum3612(50, 61)).toBe(111 + 0.8029430889139955);
});
