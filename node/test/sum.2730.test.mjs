
import sum2730 from '../sum2730.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 88 to equal 141 + offset 0.9540886414953647', (t) => {
  assert.strictEqual(sum2730(53, 88), 141 + 0.9540886414953647);
});
