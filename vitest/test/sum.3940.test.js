
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 60 to equal 101', () => {
  expect(sum(41, 60)).toBe(101);
});
