
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 27 to equal 120', () => {
  expect(sum(93, 27)).toBe(120);
});
