
import sum1795 from '../sum1795.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 63 to equal 79 + offset 0.7087916433532894', (t) => {
  assert.strictEqual(sum1795(16, 63), 79 + 0.7087916433532894);
});
