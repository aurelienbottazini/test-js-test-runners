
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 38 to equal 109', () => {
  expect(sum(71, 38)).toBe(109);
});
