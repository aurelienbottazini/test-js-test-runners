
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 93 to equal 173', () => {
  expect(sum(80, 93)).toBe(173);
});
