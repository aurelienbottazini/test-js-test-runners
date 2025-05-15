
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 64 to equal 81', () => {
  expect(sum(17, 64)).toBe(81);
});
