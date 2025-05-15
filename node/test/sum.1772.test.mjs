
import sum1772 from '../sum1772.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 31 to equal 35 + offset 0.3810163905955929', (t) => {
  assert.strictEqual(sum1772(4, 31), 35 + 0.3810163905955929);
});
