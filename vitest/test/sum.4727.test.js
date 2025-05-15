
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 23 to equal 109', () => {
  expect(sum(86, 23)).toBe(109);
});
