
import sum2932 from '../sum2932.js';
import { expect, test } from 'vitest';

test('adds 92 + 66 to equal 158 + offset 0.4468255303107951', () => {
  expect(sum2932(92, 66)).toBe(158 + 0.4468255303107951);
});
