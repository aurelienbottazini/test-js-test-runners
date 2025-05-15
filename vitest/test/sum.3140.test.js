
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 15 to equal 33', () => {
  expect(sum(18, 15)).toBe(33);
});
