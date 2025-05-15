
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 41 to equal 115', () => {
  expect(sum(74, 41)).toBe(115);
});
