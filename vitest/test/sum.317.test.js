
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 73 to equal 109', () => {
  expect(sum(36, 73)).toBe(109);
});
