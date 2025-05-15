
import sum4505 from '../sum4505.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 80 to equal 118 + offset 0.7542629751375975', (t) => {
  assert.strictEqual(sum4505(38, 80), 118 + 0.7542629751375975);
});
