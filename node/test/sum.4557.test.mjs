
import sum4557 from '../sum4557.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 71 to equal 137 + offset 0.3472706401729654', (t) => {
  assert.strictEqual(sum4557(66, 71), 137 + 0.3472706401729654);
});
