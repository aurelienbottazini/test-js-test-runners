
import sum2915 from '../sum2915.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 92 to equal 168 + offset 0.3763295751880129', (t) => {
  assert.strictEqual(sum2915(76, 92), 168 + 0.3763295751880129);
});
