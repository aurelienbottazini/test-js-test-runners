
import sum4103 from '../sum4103.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 93 to equal 135 + offset 0.7502332059336382', (t) => {
  assert.strictEqual(sum4103(42, 93), 135 + 0.7502332059336382);
});
