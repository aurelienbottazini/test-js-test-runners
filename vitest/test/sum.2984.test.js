
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 61 to equal 109', () => {
  expect(sum(48, 61)).toBe(109);
});
