
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 66 to equal 107', () => {
  expect(sum(41, 66)).toBe(107);
});
