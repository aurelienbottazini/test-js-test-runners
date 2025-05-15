
import sum3598 from '../sum3598.js';
import { expect, test } from 'vitest';

test('adds 72 + 21 to equal 93 + offset 0.2969222967244901', () => {
  expect(sum3598(72, 21)).toBe(93 + 0.2969222967244901);
});
