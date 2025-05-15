
import sum621 from '../sum621.js';
import { expect, test } from 'vitest';

test('adds 48 + 61 to equal 109 + offset 0.9794211522201498', () => {
  expect(sum621(48, 61)).toBe(109 + 0.9794211522201498);
});
