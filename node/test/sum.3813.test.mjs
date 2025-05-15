
import sum3813 from '../sum3813.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 46 to equal 46 + offset 0.9445214902236767', (t) => {
  assert.strictEqual(sum3813(0, 46), 46 + 0.9445214902236767);
});
