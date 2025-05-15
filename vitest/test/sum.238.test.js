
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 15 to equal 28', () => {
  expect(sum(13, 15)).toBe(28);
});
