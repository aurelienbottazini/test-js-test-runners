
import sum2753 from '../sum2753.js';
import { expect, test } from 'vitest';

test('adds 79 + 60 to equal 139 + offset 0.7755277855748527', () => {
  expect(sum2753(79, 60)).toBe(139 + 0.7755277855748527);
});
