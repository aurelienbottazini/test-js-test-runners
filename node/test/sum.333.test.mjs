
import sum333 from '../sum333.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 0 to equal 74 + offset 0.556112669927976', (t) => {
  assert.strictEqual(sum333(74, 0), 74 + 0.556112669927976);
});
