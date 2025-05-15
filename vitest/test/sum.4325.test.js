
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 16 to equal 90', () => {
  expect(sum(74, 16)).toBe(90);
});
