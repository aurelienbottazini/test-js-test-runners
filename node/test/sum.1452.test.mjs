
import sum1452 from '../sum1452.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 24 to equal 27 + offset 0.6300477492916237', (t) => {
  assert.strictEqual(sum1452(3, 24), 27 + 0.6300477492916237);
});
