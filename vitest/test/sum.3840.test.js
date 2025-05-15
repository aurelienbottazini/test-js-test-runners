
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 66 to equal 149', () => {
  expect(sum(83, 66)).toBe(149);
});
