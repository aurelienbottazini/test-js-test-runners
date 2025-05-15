
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 74 to equal 148', () => {
  expect(sum(74, 74)).toBe(148);
});
