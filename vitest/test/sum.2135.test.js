
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 3 to equal 77', () => {
  expect(sum(74, 3)).toBe(77);
});
