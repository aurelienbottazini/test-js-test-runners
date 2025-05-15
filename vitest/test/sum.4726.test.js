
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 81 to equal 81', () => {
  expect(sum(0, 81)).toBe(81);
});
