
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 3 to equal 78', () => {
  expect(sum(75, 3)).toBe(78);
});
