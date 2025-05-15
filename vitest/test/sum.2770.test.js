
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 99 to equal 149', () => {
  expect(sum(50, 99)).toBe(149);
});
