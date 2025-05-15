
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 15 to equal 22', () => {
  expect(sum(7, 15)).toBe(22);
});
