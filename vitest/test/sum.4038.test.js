
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 38 to equal 103', () => {
  expect(sum(65, 38)).toBe(103);
});
