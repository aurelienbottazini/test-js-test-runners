
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 79 to equal 115', () => {
  expect(sum(36, 79)).toBe(115);
});
