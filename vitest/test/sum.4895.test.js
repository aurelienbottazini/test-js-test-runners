
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 26 to equal 39', () => {
  expect(sum(13, 26)).toBe(39);
});
