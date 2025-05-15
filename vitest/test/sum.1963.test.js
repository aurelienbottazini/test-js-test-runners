
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 36 to equal 103', () => {
  expect(sum(67, 36)).toBe(103);
});
