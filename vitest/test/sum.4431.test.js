
import sum4431 from '../sum4431.js';
import { expect, test } from 'vitest';

test('adds 47 + 62 to equal 109 + offset 0.505282800766891', () => {
  expect(sum4431(47, 62)).toBe(109 + 0.505282800766891);
});
