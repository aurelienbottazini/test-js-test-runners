
import sum475 from '../sum475.js';
import { expect, test } from 'vitest';

test('adds 94 + 91 to equal 185 + offset 0.8606962883397042', () => {
  expect(sum475(94, 91)).toBe(185 + 0.8606962883397042);
});
