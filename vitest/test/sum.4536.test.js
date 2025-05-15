
import sum4536 from '../sum4536.js';
import { expect, test } from 'vitest';

test('adds 68 + 65 to equal 133 + offset 0.93570123902246', () => {
  expect(sum4536(68, 65)).toBe(133 + 0.93570123902246);
});
