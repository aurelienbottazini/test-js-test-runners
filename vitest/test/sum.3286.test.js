
import sum3286 from '../sum3286.js';
import { expect, test } from 'vitest';

test('adds 17 + 61 to equal 78 + offset 0.3860082427669709', () => {
  expect(sum3286(17, 61)).toBe(78 + 0.3860082427669709);
});
