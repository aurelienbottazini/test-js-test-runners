
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 51 to equal 111', () => {
  expect(sum(60, 51)).toBe(111);
});
