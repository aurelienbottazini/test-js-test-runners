
import sum653 from '../sum653.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 55 to equal 117 + offset 0.9917502327511328', (t) => {
  assert.strictEqual(sum653(62, 55), 117 + 0.9917502327511328);
});
