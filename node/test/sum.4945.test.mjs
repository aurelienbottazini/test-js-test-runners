
import sum4945 from '../sum4945.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 43 to equal 135 + offset 0.7482698123459497', (t) => {
  assert.strictEqual(sum4945(92, 43), 135 + 0.7482698123459497);
});
