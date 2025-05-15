
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 15 to equal 38', () => {
  expect(sum(23, 15)).toBe(38);
});
