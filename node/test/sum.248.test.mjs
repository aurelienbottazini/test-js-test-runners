
import sum248 from '../sum248.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 43 to equal 63 + offset 0.4052529621530696', (t) => {
  assert.strictEqual(sum248(20, 43), 63 + 0.4052529621530696);
});
