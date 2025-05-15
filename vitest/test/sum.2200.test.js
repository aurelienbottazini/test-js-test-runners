
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 67 to equal 160', () => {
  expect(sum(93, 67)).toBe(160);
});
