
import sum852 from '../sum852.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 57 to equal 77 + offset 0.29407536071860974', (t) => {
  assert.strictEqual(sum852(20, 57), 77 + 0.29407536071860974);
});
