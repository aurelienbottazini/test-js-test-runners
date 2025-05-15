
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 92 to equal 109', () => {
  expect(sum(17, 92)).toBe(109);
});
