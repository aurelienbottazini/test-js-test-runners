
import sum1286 from '../sum1286.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 76 to equal 78 + offset 0.9078802061108301', (t) => {
  assert.strictEqual(sum1286(2, 76), 78 + 0.9078802061108301);
});
