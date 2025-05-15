
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 74 to equal 74', () => {
  expect(sum(0, 74)).toBe(74);
});
