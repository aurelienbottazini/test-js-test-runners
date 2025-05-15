
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 75 to equal 140', () => {
  expect(sum(65, 75)).toBe(140);
});
