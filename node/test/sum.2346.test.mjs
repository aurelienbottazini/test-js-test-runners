
import sum2346 from '../sum2346.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 28 to equal 70 + offset 0.2388872027106912', (t) => {
  assert.strictEqual(sum2346(42, 28), 70 + 0.2388872027106912);
});
