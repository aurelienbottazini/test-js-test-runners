
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 60 to equal 73', () => {
  expect(sum(13, 60)).toBe(73);
});
