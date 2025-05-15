
import sum2981 from '../sum2981.js';
import { expect, test } from 'vitest';

test('adds 70 + 57 to equal 127 + offset 0.14221346528878753', () => {
  expect(sum2981(70, 57)).toBe(127 + 0.14221346528878753);
});
