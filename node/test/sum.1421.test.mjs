
import sum1421 from '../sum1421.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 73 to equal 142 + offset 0.49783008707337273', (t) => {
  assert.strictEqual(sum1421(69, 73), 142 + 0.49783008707337273);
});
