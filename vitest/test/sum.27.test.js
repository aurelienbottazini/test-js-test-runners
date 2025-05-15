
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 28 to equal 101', () => {
  expect(sum(73, 28)).toBe(101);
});
