
import sum2229 from '../sum2229.js';
import { expect, test } from 'vitest';

test('adds 9 + 21 to equal 30 + offset 0.44212369580735056', () => {
  expect(sum2229(9, 21)).toBe(30 + 0.44212369580735056);
});
