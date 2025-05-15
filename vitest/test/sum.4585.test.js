
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 67 to equal 149', () => {
  expect(sum(82, 67)).toBe(149);
});
