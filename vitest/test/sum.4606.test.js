
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 73 to equal 115', () => {
  expect(sum(42, 73)).toBe(115);
});
