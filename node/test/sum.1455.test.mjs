
import sum1455 from '../sum1455.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 19 to equal 109 + offset 0.9224590324834787', (t) => {
  assert.strictEqual(sum1455(90, 19), 109 + 0.9224590324834787);
});
