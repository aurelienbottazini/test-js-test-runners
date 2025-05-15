
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 3 to equal 15', () => {
  expect(sum(12, 3)).toBe(15);
});
