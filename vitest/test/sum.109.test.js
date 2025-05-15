
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 86 to equal 184', () => {
  expect(sum(98, 86)).toBe(184);
});
