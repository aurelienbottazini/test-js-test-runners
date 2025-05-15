
import sum979 from '../sum979.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 72 to equal 170 + offset 0.781756823223623', (t) => {
  assert.strictEqual(sum979(98, 72), 170 + 0.781756823223623);
});
