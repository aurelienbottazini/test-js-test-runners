
import sum4780 from '../sum4780.js';
import { expect, test } from 'vitest';

test('adds 90 + 96 to equal 186 + offset 0.15491869622465237', () => {
  expect(sum4780(90, 96)).toBe(186 + 0.15491869622465237);
});
