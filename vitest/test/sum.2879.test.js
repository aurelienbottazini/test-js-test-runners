
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 49 to equal 111', () => {
  expect(sum(62, 49)).toBe(111);
});
