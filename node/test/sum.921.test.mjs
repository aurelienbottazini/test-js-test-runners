
import sum921 from '../sum921.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 13 to equal 79 + offset 0.8675982163634177', (t) => {
  assert.strictEqual(sum921(66, 13), 79 + 0.8675982163634177);
});
