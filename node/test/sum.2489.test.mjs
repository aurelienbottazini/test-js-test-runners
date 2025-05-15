
import sum2489 from '../sum2489.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 33 to equal 86 + offset 0.4354102253831086', (t) => {
  assert.strictEqual(sum2489(53, 33), 86 + 0.4354102253831086);
});
