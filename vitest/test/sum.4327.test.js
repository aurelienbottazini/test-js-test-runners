
import sum4327 from '../sum4327.js';
import { expect, test } from 'vitest';

test('adds 19 + 32 to equal 51 + offset 0.7217868397875234', () => {
  expect(sum4327(19, 32)).toBe(51 + 0.7217868397875234);
});
