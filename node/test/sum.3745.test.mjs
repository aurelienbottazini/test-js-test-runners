
import sum3745 from '../sum3745.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 33 to equal 88 + offset 0.47747118904690966', (t) => {
  assert.strictEqual(sum3745(55, 33), 88 + 0.47747118904690966);
});
