
import sum3707 from '../sum3707.js';
import { expect, test } from 'vitest';

test('adds 93 + 93 to equal 186 + offset 0.20662381311996125', () => {
  expect(sum3707(93, 93)).toBe(186 + 0.20662381311996125);
});
