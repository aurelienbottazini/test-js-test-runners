
import sum2162 from '../sum2162.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 88 to equal 111 + offset 0.158529872734686', (t) => {
  assert.strictEqual(sum2162(23, 88), 111 + 0.158529872734686);
});
