
import sum3604 from '../sum3604.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 91 to equal 133 + offset 0.22736736983264239', (t) => {
  assert.strictEqual(sum3604(42, 91), 133 + 0.22736736983264239);
});
