
import sum154 from '../sum154.js';
import { expect, test } from 'vitest';

test('adds 58 + 57 to equal 115 + offset 0.1439389164128183', () => {
  expect(sum154(58, 57)).toBe(115 + 0.1439389164128183);
});
