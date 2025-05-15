
import sum3416 from '../sum3416.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 37 to equal 118 + offset 0.9770290207030143', (t) => {
  assert.strictEqual(sum3416(81, 37), 118 + 0.9770290207030143);
});
