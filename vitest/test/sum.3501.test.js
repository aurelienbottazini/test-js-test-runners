
import sum3501 from '../sum3501.js';
import { expect, test } from 'vitest';

test('adds 41 + 65 to equal 106 + offset 0.6688231717452333', () => {
  expect(sum3501(41, 65)).toBe(106 + 0.6688231717452333);
});
