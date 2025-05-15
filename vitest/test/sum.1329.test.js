
import sum1329 from '../sum1329.js';
import { expect, test } from 'vitest';

test('adds 27 + 53 to equal 80 + offset 0.24718999278245313', () => {
  expect(sum1329(27, 53)).toBe(80 + 0.24718999278245313);
});
