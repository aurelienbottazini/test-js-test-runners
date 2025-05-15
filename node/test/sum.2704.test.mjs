
import sum2704 from '../sum2704.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 90 to equal 187 + offset 0.9909317348878027', (t) => {
  assert.strictEqual(sum2704(97, 90), 187 + 0.9909317348878027);
});
