
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 85 to equal 115', () => {
  expect(sum(30, 85)).toBe(115);
});
