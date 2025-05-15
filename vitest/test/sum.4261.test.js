
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 64 to equal 149', () => {
  expect(sum(85, 64)).toBe(149);
});
