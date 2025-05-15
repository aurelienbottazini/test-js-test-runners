
import sum101 from '../sum101.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 41 to equal 112 + offset 0.7615132468029988', (t) => {
  assert.strictEqual(sum101(71, 41), 112 + 0.7615132468029988);
});
