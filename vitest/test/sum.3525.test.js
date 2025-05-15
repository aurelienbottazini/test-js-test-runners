
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 79 to equal 109', () => {
  expect(sum(30, 79)).toBe(109);
});
