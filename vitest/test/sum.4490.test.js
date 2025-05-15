
import sum4490 from '../sum4490.js';
import { expect, test } from 'vitest';

test('adds 75 + 10 to equal 85 + offset 0.07177481489592652', () => {
  expect(sum4490(75, 10)).toBe(85 + 0.07177481489592652);
});
