
import sum2104 from '../sum2104.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 4 to equal 101 + offset 0.18768713001196324', (t) => {
  assert.strictEqual(sum2104(97, 4), 101 + 0.18768713001196324);
});
