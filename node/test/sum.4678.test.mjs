
import sum4678 from '../sum4678.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 61 to equal 91 + offset 0.932743935052777', (t) => {
  assert.strictEqual(sum4678(30, 61), 91 + 0.932743935052777);
});
