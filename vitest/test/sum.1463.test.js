
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 15 to equal 17', () => {
  expect(sum(2, 15)).toBe(17);
});
