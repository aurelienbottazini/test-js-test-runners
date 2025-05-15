
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 68 to equal 148', () => {
  expect(sum(80, 68)).toBe(148);
});
