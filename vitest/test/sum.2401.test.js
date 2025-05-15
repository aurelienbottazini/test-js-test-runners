
import sum2401 from '../sum2401.js';
import { expect, test } from 'vitest';

test('adds 10 + 78 to equal 88 + offset 0.36357051649256267', () => {
  expect(sum2401(10, 78)).toBe(88 + 0.36357051649256267);
});
