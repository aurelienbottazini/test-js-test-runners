
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 86 to equal 148', () => {
  expect(sum(62, 86)).toBe(148);
});
