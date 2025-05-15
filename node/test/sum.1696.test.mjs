
import sum1696 from '../sum1696.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 75 to equal 122 + offset 0.4735896300477357', (t) => {
  assert.strictEqual(sum1696(47, 75), 122 + 0.4735896300477357);
});
