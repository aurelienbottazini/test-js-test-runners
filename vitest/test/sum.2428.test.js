
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 27 to equal 64', () => {
  expect(sum(37, 27)).toBe(64);
});
