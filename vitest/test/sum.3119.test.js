
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 66 to equal 74', () => {
  expect(sum(8, 66)).toBe(74);
});
