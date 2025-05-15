
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 71 to equal 101', () => {
  expect(sum(30, 71)).toBe(101);
});
