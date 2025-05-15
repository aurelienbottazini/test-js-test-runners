
import sum2717 from '../sum2717.js';
import { expect, test } from 'vitest';

test('adds 85 + 91 to equal 176 + offset 0.0554993446051355', () => {
  expect(sum2717(85, 91)).toBe(176 + 0.0554993446051355);
});
