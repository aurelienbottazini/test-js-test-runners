
import sum166 from '../sum166.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 62 to equal 104 + offset 0.9351517121631708', (t) => {
  assert.strictEqual(sum166(42, 62), 104 + 0.9351517121631708);
});
