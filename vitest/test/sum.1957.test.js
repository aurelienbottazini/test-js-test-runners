
import sum1957 from '../sum1957.js';
import { expect, test } from 'vitest';

test('adds 61 + 78 to equal 139 + offset 0.41990724060920237', () => {
  expect(sum1957(61, 78)).toBe(139 + 0.41990724060920237);
});
