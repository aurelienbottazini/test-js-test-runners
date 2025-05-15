
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 68 to equal 158', () => {
  expect(sum(90, 68)).toBe(158);
});
