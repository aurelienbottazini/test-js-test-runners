
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 28 to equal 121', () => {
  expect(sum(93, 28)).toBe(121);
});
