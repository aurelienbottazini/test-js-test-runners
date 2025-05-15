
import sum3393 from '../sum3393.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 99 to equal 122 + offset 0.1531299217150237', (t) => {
  assert.strictEqual(sum3393(23, 99), 122 + 0.1531299217150237);
});
