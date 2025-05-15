
import sum4031 from '../sum4031.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 23 to equal 114 + offset 0.5036316303591414', (t) => {
  assert.strictEqual(sum4031(91, 23), 114 + 0.5036316303591414);
});
