
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 66 to equal 81', () => {
  expect(sum(15, 66)).toBe(81);
});
