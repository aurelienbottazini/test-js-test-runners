
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 49 to equal 74', () => {
  expect(sum(25, 49)).toBe(74);
});
