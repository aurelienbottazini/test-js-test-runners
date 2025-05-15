
import sum2410 from '../sum2410.js';
import { expect, test } from 'vitest';

test('adds 27 + 49 to equal 76 + offset 0.05318620324409884', () => {
  expect(sum2410(27, 49)).toBe(76 + 0.05318620324409884);
});
