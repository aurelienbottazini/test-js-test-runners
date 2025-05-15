
import sum1557 from '../sum1557.js';
import { expect, test } from 'vitest';

test('adds 30 + 94 to equal 124 + offset 0.4848786308319556', () => {
  expect(sum1557(30, 94)).toBe(124 + 0.4848786308319556);
});
