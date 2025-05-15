
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 15 to equal 103', () => {
  expect(sum(88, 15)).toBe(103);
});
