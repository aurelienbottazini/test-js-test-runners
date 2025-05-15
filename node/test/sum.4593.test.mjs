
import sum4593 from '../sum4593.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 97 to equal 97 + offset 0.46937304825369386', (t) => {
  assert.strictEqual(sum4593(0, 97), 97 + 0.46937304825369386);
});
