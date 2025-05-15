
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 49 to equal 64', () => {
  expect(sum(15, 49)).toBe(64);
});
