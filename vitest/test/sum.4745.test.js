
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 20 to equal 21', () => {
  expect(sum(1, 20)).toBe(21);
});
