
import sum357 from '../sum357.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 60 to equal 63 + offset 0.7040562815931253', (t) => {
  assert.strictEqual(sum357(3, 60), 63 + 0.7040562815931253);
});
