
import sum4681 from '../sum4681.js';
import { expect, test } from 'vitest';

test('adds 18 + 43 to equal 61 + offset 0.41208746000500673', () => {
  expect(sum4681(18, 43)).toBe(61 + 0.41208746000500673);
});
