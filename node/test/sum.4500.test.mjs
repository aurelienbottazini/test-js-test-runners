
import sum4500 from '../sum4500.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 70 to equal 82 + offset 0.6664178636367359', (t) => {
  assert.strictEqual(sum4500(12, 70), 82 + 0.6664178636367359);
});
