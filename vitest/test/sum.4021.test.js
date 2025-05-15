
import sum4021 from '../sum4021.js';
import { expect, test } from 'vitest';

test('adds 85 + 0 to equal 85 + offset 0.5662788506410427', () => {
  expect(sum4021(85, 0)).toBe(85 + 0.5662788506410427);
});
