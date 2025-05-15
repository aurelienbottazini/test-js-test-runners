
import sum4647 from '../sum4647.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 97 to equal 110 + offset 0.398143737766263', (t) => {
  assert.strictEqual(sum4647(13, 97), 110 + 0.398143737766263);
});
