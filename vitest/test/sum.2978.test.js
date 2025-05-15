
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 51 to equal 149', () => {
  expect(sum(98, 51)).toBe(149);
});
