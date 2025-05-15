
import sum4498 from '../sum4498.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 81 to equal 122 + offset 0.8037049136640058', (t) => {
  assert.strictEqual(sum4498(41, 81), 122 + 0.8037049136640058);
});
