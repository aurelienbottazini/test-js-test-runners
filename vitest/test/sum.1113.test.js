
import sum1113 from '../sum1113.js';
import { expect, test } from 'vitest';

test('adds 49 + 90 to equal 139 + offset 0.5440182773296558', () => {
  expect(sum1113(49, 90)).toBe(139 + 0.5440182773296558);
});
