
import sum734 from '../sum734.js';
import { expect, test } from 'vitest';

test('adds 29 + 44 to equal 73 + offset 0.17039871974125687', () => {
  expect(sum734(29, 44)).toBe(73 + 0.17039871974125687);
});
