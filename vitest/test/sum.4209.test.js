
import sum4209 from '../sum4209.js';
import { expect, test } from 'vitest';

test('adds 88 + 41 to equal 129 + offset 0.8960391795414224', () => {
  expect(sum4209(88, 41)).toBe(129 + 0.8960391795414224);
});
