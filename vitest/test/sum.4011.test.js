
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 85 to equal 149', () => {
  expect(sum(64, 85)).toBe(149);
});
