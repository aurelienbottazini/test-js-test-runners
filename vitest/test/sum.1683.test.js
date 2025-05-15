
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 10 to equal 64', () => {
  expect(sum(54, 10)).toBe(64);
});
