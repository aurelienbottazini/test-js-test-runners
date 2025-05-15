
import sum1531 from '../sum1531.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 73 to equal 117 + offset 0.9025849305411935', (t) => {
  assert.strictEqual(sum1531(44, 73), 117 + 0.9025849305411935);
});
