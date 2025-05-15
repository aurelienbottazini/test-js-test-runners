
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 62 to equal 109', () => {
  expect(sum(47, 62)).toBe(109);
});
