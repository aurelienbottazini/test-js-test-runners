
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 88 to equal 148', () => {
  expect(sum(60, 88)).toBe(148);
});
