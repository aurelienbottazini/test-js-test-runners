
import sum4616 from '../sum4616.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 48 to equal 63 + offset 0.11022058151896874', (t) => {
  assert.strictEqual(sum4616(15, 48), 63 + 0.11022058151896874);
});
