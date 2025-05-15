
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 14 to equal 74', () => {
  expect(sum(60, 14)).toBe(74);
});
