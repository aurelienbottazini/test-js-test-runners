
import sum761 from '../sum761.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 66 to equal 90 + offset 0.4958596123012754', (t) => {
  assert.strictEqual(sum761(24, 66), 90 + 0.4958596123012754);
});
