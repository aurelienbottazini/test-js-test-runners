
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 31 to equal 44', () => {
  expect(sum(13, 31)).toBe(44);
});
