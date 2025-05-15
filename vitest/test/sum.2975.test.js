
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 20 to equal 22', () => {
  expect(sum(2, 20)).toBe(22);
});
