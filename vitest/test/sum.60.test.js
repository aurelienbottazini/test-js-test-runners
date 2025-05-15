
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 88 to equal 94', () => {
  expect(sum(6, 88)).toBe(94);
});
