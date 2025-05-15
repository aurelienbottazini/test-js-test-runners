
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 62 to equal 149', () => {
  expect(sum(87, 62)).toBe(149);
});
