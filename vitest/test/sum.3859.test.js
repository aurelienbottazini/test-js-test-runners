
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 66 to equal 101', () => {
  expect(sum(35, 66)).toBe(101);
});
