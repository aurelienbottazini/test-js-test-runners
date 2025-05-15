
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 71 to equal 115', () => {
  expect(sum(44, 71)).toBe(115);
});
