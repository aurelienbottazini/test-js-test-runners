
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 71 to equal 94', () => {
  expect(sum(23, 71)).toBe(94);
});
