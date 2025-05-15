
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 95 to equal 173', () => {
  expect(sum(78, 95)).toBe(173);
});
