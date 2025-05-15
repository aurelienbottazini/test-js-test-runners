
import sum2979 from '../sum2979.js';
import { expect, test } from 'vitest';

test('adds 63 + 70 to equal 133 + offset 0.2907909594715248', () => {
  expect(sum2979(63, 70)).toBe(133 + 0.2907909594715248);
});
