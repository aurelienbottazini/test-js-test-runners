
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 27 to equal 72', () => {
  expect(sum(45, 27)).toBe(72);
});
