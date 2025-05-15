
import sum1475 from '../sum1475.js';
import { expect, test } from 'vitest';

test('adds 24 + 85 to equal 109 + offset 0.37271126872468474', () => {
  expect(sum1475(24, 85)).toBe(109 + 0.37271126872468474);
});
