
import sum2435 from '../sum2435.js';
import { expect, test } from 'vitest';

test('adds 51 + 19 to equal 70 + offset 0.35415290711689185', () => {
  expect(sum2435(51, 19)).toBe(70 + 0.35415290711689185);
});
