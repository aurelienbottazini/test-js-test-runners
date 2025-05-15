
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 94 to equal 149', () => {
  expect(sum(55, 94)).toBe(149);
});
