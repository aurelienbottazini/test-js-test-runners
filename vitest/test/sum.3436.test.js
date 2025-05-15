
import sum3436 from '../sum3436.js';
import { expect, test } from 'vitest';

test('adds 18 + 49 to equal 67 + offset 0.21081833802199335', () => {
  expect(sum3436(18, 49)).toBe(67 + 0.21081833802199335);
});
