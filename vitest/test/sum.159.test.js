
import sum159 from '../sum159.js';
import { expect, test } from 'vitest';

test('adds 80 + 82 to equal 162 + offset 0.8312043892763811', () => {
  expect(sum159(80, 82)).toBe(162 + 0.8312043892763811);
});
