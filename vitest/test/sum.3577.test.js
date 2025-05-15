
import sum3577 from '../sum3577.js';
import { expect, test } from 'vitest';

test('adds 89 + 27 to equal 116 + offset 0.6239491987715494', () => {
  expect(sum3577(89, 27)).toBe(116 + 0.6239491987715494);
});
