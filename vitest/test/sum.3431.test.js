
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 2 to equal 64', () => {
  expect(sum(62, 2)).toBe(64);
});
