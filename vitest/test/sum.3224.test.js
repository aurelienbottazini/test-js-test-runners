
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 88 to equal 149', () => {
  expect(sum(61, 88)).toBe(149);
});
