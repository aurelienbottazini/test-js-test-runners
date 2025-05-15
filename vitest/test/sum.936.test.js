
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 76 to equal 109', () => {
  expect(sum(33, 76)).toBe(109);
});
