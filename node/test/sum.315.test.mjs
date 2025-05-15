
import sum315 from '../sum315.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 12 to equal 107 + offset 0.20426736767996012', (t) => {
  assert.strictEqual(sum315(95, 12), 107 + 0.20426736767996012);
});
