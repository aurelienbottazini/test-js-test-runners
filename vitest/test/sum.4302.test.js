
import sum4302 from '../sum4302.js';
import { expect, test } from 'vitest';

test('adds 77 + 95 to equal 172 + offset 0.28173893438076336', () => {
  expect(sum4302(77, 95)).toBe(172 + 0.28173893438076336);
});
