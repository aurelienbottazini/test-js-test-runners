
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 39 to equal 109', () => {
  expect(sum(70, 39)).toBe(109);
});
