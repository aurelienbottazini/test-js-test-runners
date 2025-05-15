
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 59 to equal 72', () => {
  expect(sum(13, 59)).toBe(72);
});
