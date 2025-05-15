
import sum3879 from '../sum3879.js';
import { expect, test } from 'vitest';

test('adds 54 + 89 to equal 143 + offset 0.07565313406949492', () => {
  expect(sum3879(54, 89)).toBe(143 + 0.07565313406949492);
});
