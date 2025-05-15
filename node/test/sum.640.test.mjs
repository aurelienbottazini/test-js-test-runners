
import sum640 from '../sum640.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 35 to equal 133 + offset 0.32944237620114614', (t) => {
  assert.strictEqual(sum640(98, 35), 133 + 0.32944237620114614);
});
