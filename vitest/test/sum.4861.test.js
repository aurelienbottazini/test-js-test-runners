
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 93 to equal 190', () => {
  expect(sum(97, 93)).toBe(190);
});
