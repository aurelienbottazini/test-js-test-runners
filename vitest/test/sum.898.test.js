
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 68 to equal 123', () => {
  expect(sum(55, 68)).toBe(123);
});
