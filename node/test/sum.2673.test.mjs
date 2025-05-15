
import sum2673 from '../sum2673.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 38 to equal 111 + offset 0.9903061555348407', (t) => {
  assert.strictEqual(sum2673(73, 38), 111 + 0.9903061555348407);
});
