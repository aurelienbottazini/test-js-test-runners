
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 85 to equal 183', () => {
  expect(sum(98, 85)).toBe(183);
});
