
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 74 to equal 147', () => {
  expect(sum(73, 74)).toBe(147);
});
