
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 33 to equal 126', () => {
  expect(sum(93, 33)).toBe(126);
});
