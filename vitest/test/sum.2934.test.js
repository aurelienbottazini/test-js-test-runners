
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 60 to equal 78', () => {
  expect(sum(18, 60)).toBe(78);
});
