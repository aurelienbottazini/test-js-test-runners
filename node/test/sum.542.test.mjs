
import sum542 from '../sum542.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 15 to equal 75 + offset 0.9264342021444957', (t) => {
  assert.strictEqual(sum542(60, 15), 75 + 0.9264342021444957);
});
