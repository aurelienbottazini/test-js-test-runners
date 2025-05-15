
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 86 to equal 158', () => {
  expect(sum(72, 86)).toBe(158);
});
