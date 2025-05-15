
import sum4993 from '../sum4993.js';
import { expect, test } from 'vitest';

test('adds 56 + 13 to equal 69 + offset 0.3701120550884498', () => {
  expect(sum4993(56, 13)).toBe(69 + 0.3701120550884498);
});
