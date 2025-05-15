
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 19 to equal 112', () => {
  expect(sum(93, 19)).toBe(112);
});
