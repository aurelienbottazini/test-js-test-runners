
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 87 to equal 148', () => {
  expect(sum(61, 87)).toBe(148);
});
