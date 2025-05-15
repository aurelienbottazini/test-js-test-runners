
import sum319 from '../sum319.js';
import { expect, test } from 'vitest';

test('adds 84 + 97 to equal 181 + offset 0.8647519290528392', () => {
  expect(sum319(84, 97)).toBe(181 + 0.8647519290528392);
});
