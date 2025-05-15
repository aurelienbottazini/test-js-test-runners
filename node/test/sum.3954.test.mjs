
import sum3954 from '../sum3954.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 93 to equal 118 + offset 0.6528469365727296', (t) => {
  assert.strictEqual(sum3954(25, 93), 118 + 0.6528469365727296);
});
