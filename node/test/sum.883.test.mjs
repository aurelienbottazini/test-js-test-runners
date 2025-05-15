
import sum883 from '../sum883.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 40 to equal 65 + offset 0.15654755344952453', (t) => {
  assert.strictEqual(sum883(25, 40), 65 + 0.15654755344952453);
});
