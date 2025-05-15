
import sum134 from '../sum134.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 3 to equal 90 + offset 0.7281685379077463', (t) => {
  assert.strictEqual(sum134(87, 3), 90 + 0.7281685379077463);
});
