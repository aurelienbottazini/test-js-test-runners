
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 80 to equal 173', () => {
  expect(sum(93, 80)).toBe(173);
});
