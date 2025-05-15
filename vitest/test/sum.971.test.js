
import sum971 from '../sum971.js';
import { expect, test } from 'vitest';

test('adds 45 + 22 to equal 67 + offset 0.7083939307622493', () => {
  expect(sum971(45, 22)).toBe(67 + 0.7083939307622493);
});
