
import sum3056 from '../sum3056.js';
import { expect, test } from 'vitest';

test('adds 19 + 75 to equal 94 + offset 0.4394155150292679', () => {
  expect(sum3056(19, 75)).toBe(94 + 0.4394155150292679);
});
