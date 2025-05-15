
import sum98 from '../sum98.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 36 to equal 61 + offset 0.3042816309138383', (t) => {
  assert.strictEqual(sum98(25, 36), 61 + 0.3042816309138383);
});
