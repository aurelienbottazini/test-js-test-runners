
import sum4453 from '../sum4453.js';
import { expect, test } from 'vitest';

test('adds 57 + 19 to equal 76 + offset 0.24240119646676606', () => {
  expect(sum4453(57, 19)).toBe(76 + 0.24240119646676606);
});
