
import sum4463 from '../sum4463.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 56 to equal 60 + offset 0.5357991541773582', (t) => {
  assert.strictEqual(sum4463(4, 56), 60 + 0.5357991541773582);
});
