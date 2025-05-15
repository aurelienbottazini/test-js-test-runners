
import sum2922 from '../sum2922.js';
import { expect, test } from 'vitest';

test('adds 96 + 85 to equal 181 + offset 0.07901063207501746', () => {
  expect(sum2922(96, 85)).toBe(181 + 0.07901063207501746);
});
