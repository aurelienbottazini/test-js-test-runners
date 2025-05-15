
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 66 to equal 115', () => {
  expect(sum(49, 66)).toBe(115);
});
