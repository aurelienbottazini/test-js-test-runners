
import sum4726 from '../sum4726.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 67 to equal 166 + offset 0.9518992457403246', (t) => {
  assert.strictEqual(sum4726(99, 67), 166 + 0.9518992457403246);
});
