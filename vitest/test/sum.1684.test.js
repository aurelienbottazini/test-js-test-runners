
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 13 to equal 64', () => {
  expect(sum(51, 13)).toBe(64);
});
