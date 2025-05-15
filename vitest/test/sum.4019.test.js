
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 78 to equal 149', () => {
  expect(sum(71, 78)).toBe(149);
});
