
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 51 to equal 109', () => {
  expect(sum(58, 51)).toBe(109);
});
