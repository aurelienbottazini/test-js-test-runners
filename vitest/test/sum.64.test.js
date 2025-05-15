
import sum64 from '../sum64.js';
import { expect, test } from 'vitest';

test('adds 85 + 44 to equal 129 + offset 0.8079116819753351', () => {
  expect(sum64(85, 44)).toBe(129 + 0.8079116819753351);
});
