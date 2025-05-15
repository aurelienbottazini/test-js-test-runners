
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 25 to equal 72', () => {
  expect(sum(47, 25)).toBe(72);
});
