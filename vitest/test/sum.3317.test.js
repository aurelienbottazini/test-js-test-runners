
import sum3317 from '../sum3317.js';
import { expect, test } from 'vitest';

test('adds 53 + 61 to equal 114 + offset 0.7349625428422909', () => {
  expect(sum3317(53, 61)).toBe(114 + 0.7349625428422909);
});
