
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 18 to equal 109', () => {
  expect(sum(91, 18)).toBe(109);
});
