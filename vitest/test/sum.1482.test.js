
import sum1482 from '../sum1482.js';
import { expect, test } from 'vitest';

test('adds 93 + 67 to equal 160 + offset 0.5381823539874547', () => {
  expect(sum1482(93, 67)).toBe(160 + 0.5381823539874547);
});
