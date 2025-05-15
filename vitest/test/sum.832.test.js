
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 33 to equal 101', () => {
  expect(sum(68, 33)).toBe(101);
});
