
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 74 to equal 140', () => {
  expect(sum(66, 74)).toBe(140);
});
