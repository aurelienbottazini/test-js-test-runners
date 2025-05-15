
import sum3726 from '../sum3726.js';
import { expect, test } from 'vitest';

test('adds 79 + 31 to equal 110 + offset 0.021932079919209646', () => {
  expect(sum3726(79, 31)).toBe(110 + 0.021932079919209646);
});
