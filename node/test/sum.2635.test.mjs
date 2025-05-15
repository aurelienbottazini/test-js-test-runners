
import sum2635 from '../sum2635.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 64 to equal 88 + offset 0.81103614905502', (t) => {
  assert.strictEqual(sum2635(24, 64), 88 + 0.81103614905502);
});
