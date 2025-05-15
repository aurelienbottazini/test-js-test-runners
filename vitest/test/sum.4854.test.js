
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 21 to equal 64', () => {
  expect(sum(43, 21)).toBe(64);
});
