
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 39 to equal 80', () => {
  expect(sum(41, 39)).toBe(80);
});
