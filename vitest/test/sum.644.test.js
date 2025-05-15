
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 97 to equal 190', () => {
  expect(sum(93, 97)).toBe(190);
});
