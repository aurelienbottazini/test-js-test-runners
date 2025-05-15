
import sum905 from '../sum905.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 70 to equal 97 + offset 0.9863081051130543', (t) => {
  assert.strictEqual(sum905(27, 70), 97 + 0.9863081051130543);
});
