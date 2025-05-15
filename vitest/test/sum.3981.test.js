
import sum3981 from '../sum3981.js';
import { expect, test } from 'vitest';

test('adds 31 + 52 to equal 83 + offset 0.9498792733252083', () => {
  expect(sum3981(31, 52)).toBe(83 + 0.9498792733252083);
});
