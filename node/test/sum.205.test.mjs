
import sum205 from '../sum205.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 8 to equal 36 + offset 0.47995080308949867', (t) => {
  assert.strictEqual(sum205(28, 8), 36 + 0.47995080308949867);
});
