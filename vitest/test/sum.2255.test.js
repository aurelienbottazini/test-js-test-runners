
import sum2255 from '../sum2255.js';
import { expect, test } from 'vitest';

test('adds 22 + 10 to equal 32 + offset 0.5566061347132141', () => {
  expect(sum2255(22, 10)).toBe(32 + 0.5566061347132141);
});
