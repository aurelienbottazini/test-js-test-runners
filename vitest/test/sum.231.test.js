
import sum231 from '../sum231.js';
import { expect, test } from 'vitest';

test('adds 32 + 25 to equal 57 + offset 0.38865893361361936', () => {
  expect(sum231(32, 25)).toBe(57 + 0.38865893361361936);
});
