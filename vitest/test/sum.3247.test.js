
import sum3247 from '../sum3247.js';
import { expect, test } from 'vitest';

test('adds 82 + 57 to equal 139 + offset 0.17133944226926867', () => {
  expect(sum3247(82, 57)).toBe(139 + 0.17133944226926867);
});
