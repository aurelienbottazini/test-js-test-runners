
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 13 to equal 106', () => {
  expect(sum(93, 13)).toBe(106);
});
