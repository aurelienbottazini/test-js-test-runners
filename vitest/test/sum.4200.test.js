
import sum4200 from '../sum4200.js';
import { expect, test } from 'vitest';

test('adds 6 + 60 to equal 66 + offset 0.32881508762705947', () => {
  expect(sum4200(6, 60)).toBe(66 + 0.32881508762705947);
});
