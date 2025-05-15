
import sum192 from '../sum192.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 56 to equal 137 + offset 0.8253358090424369', (t) => {
  assert.strictEqual(sum192(81, 56), 137 + 0.8253358090424369);
});
