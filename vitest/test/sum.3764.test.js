
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 51 to equal 148', () => {
  expect(sum(97, 51)).toBe(148);
});
