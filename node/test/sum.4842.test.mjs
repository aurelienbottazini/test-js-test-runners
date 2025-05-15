
import sum4842 from '../sum4842.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 37 to equal 42 + offset 0.11369329095614156', (t) => {
  assert.strictEqual(sum4842(5, 37), 42 + 0.11369329095614156);
});
