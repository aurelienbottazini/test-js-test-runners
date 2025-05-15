
import sum2236 from '../sum2236.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 18 to equal 60 + offset 0.18508570583968453', (t) => {
  assert.strictEqual(sum2236(42, 18), 60 + 0.18508570583968453);
});
