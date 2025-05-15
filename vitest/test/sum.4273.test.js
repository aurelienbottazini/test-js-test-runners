
import sum4273 from '../sum4273.js';
import { expect, test } from 'vitest';

test('adds 21 + 93 to equal 114 + offset 0.585244575038954', () => {
  expect(sum4273(21, 93)).toBe(114 + 0.585244575038954);
});
