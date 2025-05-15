
import sum2477 from '../sum2477.js';
import { expect, test } from 'vitest';

test('adds 51 + 14 to equal 65 + offset 0.5203505921135907', () => {
  expect(sum2477(51, 14)).toBe(65 + 0.5203505921135907);
});
