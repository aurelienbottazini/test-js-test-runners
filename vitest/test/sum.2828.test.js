
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 11 to equal 109', () => {
  expect(sum(98, 11)).toBe(109);
});
