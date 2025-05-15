
import sum4369 from '../sum4369.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 19 to equal 61 + offset 0.02823547828807582', (t) => {
  assert.strictEqual(sum4369(42, 19), 61 + 0.02823547828807582);
});
