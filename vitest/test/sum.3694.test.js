
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 17 to equal 115', () => {
  expect(sum(98, 17)).toBe(115);
});
