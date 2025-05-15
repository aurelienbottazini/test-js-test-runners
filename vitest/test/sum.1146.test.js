
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 27 to equal 40', () => {
  expect(sum(13, 27)).toBe(40);
});
