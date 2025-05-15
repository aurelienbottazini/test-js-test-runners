
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 60 to equal 134', () => {
  expect(sum(74, 60)).toBe(134);
});
