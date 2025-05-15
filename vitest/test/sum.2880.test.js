
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 84 to equal 109', () => {
  expect(sum(25, 84)).toBe(109);
});
