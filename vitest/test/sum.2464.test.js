
import sum2464 from '../sum2464.js';
import { expect, test } from 'vitest';

test('adds 2 + 46 to equal 48 + offset 0.6945192520094555', () => {
  expect(sum2464(2, 46)).toBe(48 + 0.6945192520094555);
});
