
import sum4316 from '../sum4316.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 17 to equal 82 + offset 0.8269416510314829', (t) => {
  assert.strictEqual(sum4316(65, 17), 82 + 0.8269416510314829);
});
