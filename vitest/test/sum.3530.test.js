
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 43 to equal 109', () => {
  expect(sum(66, 43)).toBe(109);
});
