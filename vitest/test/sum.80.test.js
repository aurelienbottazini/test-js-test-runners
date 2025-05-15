
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 75 to equal 109', () => {
  expect(sum(34, 75)).toBe(109);
});
