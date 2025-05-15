
import sum3371 from '../sum3371.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 79 to equal 105 + offset 0.6871686132020577', (t) => {
  assert.strictEqual(sum3371(26, 79), 105 + 0.6871686132020577);
});
