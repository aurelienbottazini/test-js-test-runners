
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 71 to equal 81', () => {
  expect(sum(10, 71)).toBe(81);
});
