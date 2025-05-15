
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 14 to equal 109', () => {
  expect(sum(95, 14)).toBe(109);
});
