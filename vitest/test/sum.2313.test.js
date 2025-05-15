
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 92 to equal 190', () => {
  expect(sum(98, 92)).toBe(190);
});
