
import sum2714 from '../sum2714.js';
import { expect, test } from 'vitest';

test('adds 49 + 46 to equal 95 + offset 0.3897988098003018', () => {
  expect(sum2714(49, 46)).toBe(95 + 0.3897988098003018);
});
