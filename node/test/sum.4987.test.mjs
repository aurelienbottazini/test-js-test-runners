
import sum4987 from '../sum4987.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 37 to equal 127 + offset 0.6967914130020677', (t) => {
  assert.strictEqual(sum4987(90, 37), 127 + 0.6967914130020677);
});
