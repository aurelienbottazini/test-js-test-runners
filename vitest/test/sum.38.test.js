
import sum38 from '../sum38.js';
import { expect, test } from 'vitest';

test('adds 34 + 78 to equal 112 + offset 0.9556276101494912', () => {
  expect(sum38(34, 78)).toBe(112 + 0.9556276101494912);
});
