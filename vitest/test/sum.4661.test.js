
import sum4661 from '../sum4661.js';
import { expect, test } from 'vitest';

test('adds 79 + 10 to equal 89 + offset 0.9814988572458404', () => {
  expect(sum4661(79, 10)).toBe(89 + 0.9814988572458404);
});
