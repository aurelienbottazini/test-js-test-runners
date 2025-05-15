
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 78 to equal 115', () => {
  expect(sum(37, 78)).toBe(115);
});
