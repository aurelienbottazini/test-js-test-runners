
import sum600 from '../sum600.js';
import { expect, test } from 'vitest';

test('adds 97 + 25 to equal 122 + offset 0.2643655511180465', () => {
  expect(sum600(97, 25)).toBe(122 + 0.2643655511180465);
});
