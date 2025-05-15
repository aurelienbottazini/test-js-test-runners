
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 66 to equal 109', () => {
  expect(sum(43, 66)).toBe(109);
});
