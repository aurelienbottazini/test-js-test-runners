
import sum551 from '../sum551.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 69 to equal 132 + offset 0.6747272900797016', (t) => {
  assert.strictEqual(sum551(63, 69), 132 + 0.6747272900797016);
});
