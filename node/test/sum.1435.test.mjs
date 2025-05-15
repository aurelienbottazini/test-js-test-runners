
import sum1435 from '../sum1435.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 44 to equal 97 + offset 0.96521437271932', (t) => {
  assert.strictEqual(sum1435(53, 44), 97 + 0.96521437271932);
});
