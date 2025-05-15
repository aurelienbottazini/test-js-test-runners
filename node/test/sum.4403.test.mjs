
import sum4403 from '../sum4403.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 58 to equal 116 + offset 0.8835497955887858', (t) => {
  assert.strictEqual(sum4403(58, 58), 116 + 0.8835497955887858);
});
