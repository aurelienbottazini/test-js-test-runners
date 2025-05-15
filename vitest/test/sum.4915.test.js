
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 15 to equal 53', () => {
  expect(sum(38, 15)).toBe(53);
});
