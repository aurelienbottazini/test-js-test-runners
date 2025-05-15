
import sum3804 from '../sum3804.js';
import { expect, test } from 'vitest';

test('adds 22 + 9 to equal 31 + offset 0.2225146414849697', () => {
  expect(sum3804(22, 9)).toBe(31 + 0.2225146414849697);
});
