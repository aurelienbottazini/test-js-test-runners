
import sum1866 from '../sum1866.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 30 to equal 111 + offset 0.9924747206517016', (t) => {
  assert.strictEqual(sum1866(81, 30), 111 + 0.9924747206517016);
});
