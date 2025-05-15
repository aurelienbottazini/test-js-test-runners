
import sum3488 from '../sum3488.js';
import { expect, test } from 'vitest';

test('adds 83 + 6 to equal 89 + offset 0.05328605017943522', () => {
  expect(sum3488(83, 6)).toBe(89 + 0.05328605017943522);
});
