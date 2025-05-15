
import sum1207 from '../sum1207.js';
import { expect, test } from 'vitest';

test('adds 18 + 67 to equal 85 + offset 0.41195201023286365', () => {
  expect(sum1207(18, 67)).toBe(85 + 0.41195201023286365);
});
