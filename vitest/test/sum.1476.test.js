
import sum1476 from '../sum1476.js';
import { expect, test } from 'vitest';

test('adds 36 + 53 to equal 89 + offset 0.2614449970033318', () => {
  expect(sum1476(36, 53)).toBe(89 + 0.2614449970033318);
});
