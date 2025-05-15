
import sum1012 from '../sum1012.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 61 to equal 111 + offset 0.6299684927133204', (t) => {
  assert.strictEqual(sum1012(50, 61), 111 + 0.6299684927133204);
});
